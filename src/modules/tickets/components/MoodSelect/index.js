import React from 'react'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MenuItem from 'modules/core/components/MenuItem'
import FilterSelect from '../FilterSelect'

const MoodSelect = (props) => {
  const { mood, onSelect, ...restProps } = props

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

  const selectedItemIcon = moods.find((item) => item.name === mood)?.icon

  const placeholderIcon =
    mood && selectedItemIcon ? (
      selectedItemIcon
    ) : (
      <FontAwesomeIcon icon={['far', 'meh-blank']} />
    )

  return (
    <FilterSelect icon={placeholderIcon} value={mood} {...restProps}>
      {(closeDropdown) => (
        <div>
          <MenuItem
            text={formatMessage({
              id: 'tickets.any.mood',
              defaultMessage: 'any mood',
            })}
            icon={<FontAwesomeIcon icon={['far', 'meh-blank']} />}
            selected={!mood}
            withSelectionIcon
            width={194}
            onClick={() => {
              onSelect(null)
              closeDropdown()
            }}
          />

          {moods.map((item) => {
            const isSelected = mood === item.name

            return (
              <MenuItem
                key={item.name}
                text={item.name}
                icon={item.icon}
                selected={isSelected}
                withSelectionIcon
                width={194}
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

MoodSelect.propTypes = {
  mood: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
}

MoodSelect.defaultProps = {
  mood: null,
}

export default MoodSelect
