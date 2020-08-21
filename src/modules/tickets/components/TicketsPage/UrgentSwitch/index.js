import React from 'react'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IconTextButton from 'modules/core/components/IconTextButton'

const UrgentSwitch = (props) => {
  const { isActive, onChange } = props

  const { formatMessage } = useIntl()

  return (
    <IconTextButton
      title={formatMessage({
        id: 'tickets.urgent',
        defaultMessage: 'urgent',
      })}
      icon={<FontAwesomeIcon icon={['far', 'exclamation-triangle']} />}
      activeIcon={<FontAwesomeIcon icon={['fas', 'exclamation-triangle']} />}
      isActive={isActive}
      onChange={onChange}
    />
  )
}

UrgentSwitch.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default UrgentSwitch
