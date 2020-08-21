import React from 'react'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MenuItem from 'modules/core/components/MenuItem'
import FilterSelect from '../FilterSelect'

const intents = [
  {
    name: 'shipping',
  },
  {
    name: 'refund',
  },
  {
    name: 'tracking',
  },
  {
    name: 'exchange',
  },
]

const IntentionSelect = (props) => {
  const { intent, onSelect, ...restProps } = props

  const { formatMessage } = useIntl()

  return (
    <FilterSelect
      icon={<FontAwesomeIcon icon={['far', 'bullseye-arrow']} />}
      value={intent}
      {...restProps}
    >
      {(closeDropdown) => (
        <div>
          <MenuItem
            text={formatMessage({
              id: 'tickets.any.intent',
              defaultMessage: 'any intent',
            })}
            selected={!intent}
            withSelectionIcon
            width={194}
            onClick={() => {
              onSelect(null)
              closeDropdown()
            }}
          />

          {intents.map((item) => {
            const isSelected = intent === item.name

            return (
              <MenuItem
                key={item.name}
                text={item.name}
                selected={isSelected}
                width={194}
                withSelectionIcon
                onClick={() => {
                  onSelect(item.name)
                  closeDropdown()
                }}
              />
            )
          })}
        </div>
      )}
    </FilterSelect>
  )
}

IntentionSelect.propTypes = {
  intent: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
}

IntentionSelect.defaultProps = {
  intent: null,
}

export default IntentionSelect
