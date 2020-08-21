import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MobileTopBar from 'modules/core/components/MobileTopBar'
import MobileSelectItem from 'modules/core/components/MobileSelectItem'

const IntentMenu = (props) => {
  const { selectedItem, onSelect, onBackClick } = props

  const { formatMessage } = useIntl()

  const moods = [
    {
      name: formatMessage({
        id: 'tickets.mood.sad',
        defaultMessage: 'sad',
      }),
      icon: <FontAwesomeIcon icon={['far', 'frown']} />,
    },
    {
      name: formatMessage({
        id: 'tickets.mood.neutral',
        defaultMessage: 'neutral',
      }),
      icon: <FontAwesomeIcon icon={['far', 'meh']} />,
    },
    {
      name: formatMessage({
        id: 'tickets.mood.happy',
        defaultMessage: 'happy',
      }),
      icon: <FontAwesomeIcon icon={['far', 'smile']} />,
    },
  ]

  const selectHandler = (intent) => {
    onSelect(intent)
    onBackClick()
  }

  return (
    <MobileTopBar
      leftIcon={<FontAwesomeIcon icon={['far', 'arrow-left']} />}
      onLeftIconClick={onBackClick}
      title={formatMessage({
        id: 'tickets.mood',
        defaultMessage: 'mood',
      })}
    >
      <MobileSelectItem
        title={formatMessage({
          id: 'tickets.any.mood',
          defaultMessage: 'any mood',
        })}
        isSelected={!selectedItem}
        onClick={() => selectHandler(null)}
      />

      {moods.map((item) => (
        <MobileSelectItem
          key={item.name}
          title={item.name}
          startIcon={item.icon}
          isSelected={selectedItem === item.name}
          onClick={() => selectHandler(item.name)}
        />
      ))}
    </MobileTopBar>
  )
}

IntentMenu.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  onBackClick: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default IntentMenu
