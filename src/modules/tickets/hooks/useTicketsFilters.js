import { useState, useCallback, useEffect, useMemo } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core'
import qs from 'query-string'

export const FiltersEnum = {
  Intent: 'intent',
  Mood: 'mood',
  Urgent: 'urgent',
  Time: 'time',
  Start_Date: 'startDate',
  End_Date: 'endDate',
}

export const useTicketsFilters = ({ applyFiltersOnChange } = {}) => {
  const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'))

  const history = useHistory()
  const { search } = useLocation()

  const parsedQueryStrings = useMemo(() => qs.parse(search), [search])

  const initialFilters = useMemo(() => {
    const filtersKeys = Object.values(FiltersEnum)

    const filters = {}

    filtersKeys.forEach((key) => {
      filters[key] =
        key === FiltersEnum.Urgent
          ? parsedQueryStrings[key] === '1'
          : parsedQueryStrings[key]
    })

    return filters
  }, [parsedQueryStrings])

  const [filters, setFilters] = useState(initialFilters)
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)

  const applyFilters = useCallback(() => {
    const newQueryStrings = {
      ...parsedQueryStrings,
    }

    const filtersKeys = Object.values(FiltersEnum)

    filtersKeys.forEach((key) => {
      const filterValue = filters[key]

      if (filterValue) {
        newQueryStrings[key] = filterValue
      } else {
        delete newQueryStrings[key]
      }
    })

    // apply
    if (isMobileScreen) {
      history.replace({
        search: qs.stringify(newQueryStrings),
      })
    } else {
      history.push({
        search: qs.stringify(newQueryStrings),
      })
    }
  }, [filters, history, isMobileScreen, parsedQueryStrings])

  const clearFilters = () => {
    setFilters({})
  }

  const setFilter = (key, value) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [key]: key === FiltersEnum.Urgent && value ? '1' : value,
    }))
  }

  // update active filters count on change
  useEffect(() => {
    const currentActiveFilters = Object.values(filters).filter((item) =>
      Boolean(item)
    )
    setActiveFiltersCount(currentActiveFilters.length)
  }, [filters])

  // auto aplly filters on change (if needed)
  useEffect(() => {
    if (applyFiltersOnChange) {
      applyFilters()
    }
  }, [applyFilters, applyFiltersOnChange])

  return {
    filters,
    setFilter,
    applyFilters,
    clearFilters,
    activeFiltersCount,
  }
}
