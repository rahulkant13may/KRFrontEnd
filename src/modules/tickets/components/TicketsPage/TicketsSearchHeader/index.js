import React from 'react'
import { useIntl } from 'react-intl'

import SearchBar from 'modules/core/components/SearchBar'
import ListPagination from 'modules/core/components/ListPagination'

import { StyledListPagination } from './styles'

const TicketsSearchHeader = () => {
  const { formatMessage } = useIntl()

  return (
    <SearchBar
      placeholder={formatMessage({
        id: 'tickets.search.tickets',
        defaultMessage: 'search tickets',
      })}
    >
      <StyledListPagination>
        <ListPagination
          count={120}
          page={1}
          countPerPage={10}
          next={() => {}}
          back={() => {}}
        />
      </StyledListPagination>
    </SearchBar>
  )
}

export default TicketsSearchHeader
