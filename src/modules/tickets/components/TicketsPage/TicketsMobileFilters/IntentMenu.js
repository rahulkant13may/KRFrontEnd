import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MobileTopBar from 'modules/core/components/MobileTopBar'
import MobileSelectItem from 'modules/core/components/MobileSelectItem'

const intents = [
  {
    name: 'intent 1',
  },
  {
    name: 'intent 2',
  },
]

const IntentMenu = (props) => {
  const { selectedItem, onSelect, onBackClick } = props

  const { formatMessage } = useIntl()

  const selectHandler = (intent) => {
    onSelect(intent)
    onBackClick()
  }

  return (
    <MobileTopBar
      leftIcon={<FontAwesomeIcon icon={['far', 'arrow-left']} />}
      onLeftIconClick={onBackClick}
      title={formatMessage({
        id: 'tickets.intent',
        defaultMessage: 'intent',
      })}
    >
      <MobileSelectItem
        title={formatMessage({
          id: 'tickets.any.intent',
          defaultMessage: 'any intent',
        })}
        isSelected={!selectedItem}
        onClick={() => selectHandler(null)}
      />

      {intents.map((item) => (
        <MobileSelectItem
          key={item.name}
          title={item.name}
          isSelected={selectedItem === item.name}
          onClick={() => selectHandler(item.name)}
        />
      ))}
    </MobileTopBar>
  )
}

IntentMenu.propTypes = {
  selectedItem: PropTypes.string,
  onBackClick: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

IntentMenu.defaultProps = {
  selectedItem: '',
}

export default IntentMenu
