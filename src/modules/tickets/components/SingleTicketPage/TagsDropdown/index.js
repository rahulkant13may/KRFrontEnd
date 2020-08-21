import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import SearchableMenu from 'modules/core/components/SearchableMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FilterSelect from '../../FilterSelect'

const items = [
  {
    id: 1,
    name: 'tag1',
  },
  {
    id: 2,
    name: 'tag2',
  },
  {
    id: 3,
    name: 'tag3',
  },
  {
    id: 4,
    name: 'tag4',
  },
]

const TagsDropdown = (props) => {
  const { withBackButton, back, onItemClick, ...restProps } = props

  const { formatMessage } = useIntl()

  return (
    <FilterSelect
      placeholder={formatMessage({
        id: 'tickets.add.tags',
        defaultMessage: 'add tags',
      })}
      icon={<FontAwesomeIcon icon={['far', 'tag']} />}
      {...restProps}
    >
      {(closeDropdown) => (
        <SearchableMenu
          withBackButton={withBackButton}
          back={back}
          title={formatMessage({
            id: 'tickets.add.tags',
            defaultMessage: 'add tags',
          })}
          searchPlaceholder={`${formatMessage({
            id: 'tickets.search.tags',
            defaultMessage: 'search tags',
          })}...`}
          items={items}
          onItemClick={() => {
            onItemClick()
            closeDropdown()
          }}
        />
      )}
    </FilterSelect>
  )
}

TagsDropdown.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  back: PropTypes.func,
  withBackButton: PropTypes.bool,
}

TagsDropdown.defaultProps = {
  back: null,
  withBackButton: false,
}

export default TagsDropdown
