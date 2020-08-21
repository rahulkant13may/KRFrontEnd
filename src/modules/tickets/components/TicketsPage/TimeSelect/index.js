import React, { useEffect, useCallback, useState } from 'react'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  TimesEnum,
  getDateRangeLabel,
  isInvalidRange,
  times,
} from 'modules/tickets/utils/timeSelectHelpers'

import MenuItem from 'modules/core/components/MenuItem'
import FilterSelect from '../../FilterSelect'
import DatePicker from './DatePicker'

const { CUSTOM_RANGE } = TimesEnum

const TimeSelect = (props) => {
  const { time, startDate, endDate, setTime, setStartDate, setEndDate } = props

  const { formatMessage } = useIntl()

  const [isDatePickerVisible, showDatePicker] = useState(false)

  const changeHandler = useCallback(
    (newTime, newStartDate, newEndDate) => {
      setTime(newTime)
      setStartDate(newStartDate)
      setEndDate(newEndDate)
    },
    [setEndDate, setStartDate, setTime]
  )

  const clearTime = useCallback(() => {
    setTime(null)
    setStartDate(null)
    setEndDate(null)
  }, [setEndDate, setStartDate, setTime])

  // clear values if url dates are invalid
  useEffect(() => {
    const missingRange = time === CUSTOM_RANGE && !startDate && !endDate
    const invalidTimeValue = time && !Object.values(TimesEnum).includes(time)
    const invalidRange =
      (startDate || endDate) && isInvalidRange({ startDate, endDate })

    if (missingRange || invalidRange || invalidTimeValue) {
      clearTime()
    }
  }, [clearTime, endDate, startDate, time])

  const getSelectedLabel = () => {
    if (time === CUSTOM_RANGE) {
      return getDateRangeLabel({
        startDate,
        endDate,
        afterLabel: formatMessage({
          id: 'tickets.after',
          defaultMessage: 'after',
        }),
        beforeLabel: formatMessage({
          id: 'tickets.before',
          defaultMessage: 'before',
        }),
      })
    }

    return times.find((item) => item.id === time)?.name
  }

  return (
    <FilterSelect
      icon={<FontAwesomeIcon icon={['far', 'calendar-day']} />}
      placeholder={formatMessage({
        id: 'tickets.any.time',
        defaultMessage: 'any time',
      })}
      value={getSelectedLabel()}
      onClose={() => showDatePicker(false)}
    >
      {(closeDropdown) => {
        if (isDatePickerVisible) {
          return (
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              back={() => showDatePicker(false)}
              onApply={(pickerStartDate, pickerEndDate) => {
                changeHandler(CUSTOM_RANGE, pickerStartDate, pickerEndDate)
                closeDropdown()
              }}
            />
          )
        }

        return (
          <div>
            {/* Clear filter */}
            <MenuItem
              text={formatMessage({
                id: 'tickets.any.time',
                defaultMessage: 'any time',
              })}
              selected={!time}
              width={194}
              withSelectionIcon
              onClick={() => {
                clearTime()
                closeDropdown()
              }}
            />

            {/* Options */}
            {times.map((item) => {
              const isSelected = item.id === time

              return (
                <MenuItem
                  key={item.id}
                  text={item.name}
                  selected={isSelected}
                  width={194}
                  withSelectionIcon
                  onClick={() => {
                    changeHandler(item.id)
                    closeDropdown()
                  }}
                />
              )
            })}

            {/* Custom Range */}
            <MenuItem
              text={`${formatMessage({
                id: 'tickets.custom.range',
                defaultMessage: 'custom range',
              })}...`}
              width={194}
              withBorderTop
              withSelectionIcon
              selected={time === CUSTOM_RANGE}
              onClick={() => {
                showDatePicker(true)
              }}
            />
          </div>
        )
      }}
    </FilterSelect>
  )
}

TimeSelect.propTypes = {
  time: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  setTime: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
}

TimeSelect.defaultProps = {
  time: null,
  startDate: null,
  endDate: null,
}

export default TimeSelect
