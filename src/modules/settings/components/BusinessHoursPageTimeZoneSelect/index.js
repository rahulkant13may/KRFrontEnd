import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BusinessHoursPageTimeZoneElementsLeft from 'modules/settings/components/BusinessHoursPageTimeZoneElementsLeft'
import { StyledBusinessHoursPageTimeZoneSelect } from './styles'

const BusinessHoursPageTimeZoneSelect = () => {
  return (
    <>
      <StyledBusinessHoursPageTimeZoneSelect>
        <BusinessHoursPageTimeZoneElementsLeft />
        <FontAwesomeIcon
          className="settings_BusinessHoursPageTimeZoneElements_chevron-down-icon"
          icon={['far', 'chevron-down']}
        />
      </StyledBusinessHoursPageTimeZoneSelect>
    </>
  )
}

export default BusinessHoursPageTimeZoneSelect
