import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledBusinessHoursPageTimeZoneElementsLeft } from './styles'

const BusinessHoursPageTimeZoneElementsLeft = ({ marginLeft }) => {
  return (
    <>
      <StyledBusinessHoursPageTimeZoneElementsLeft
        marginLeft={marginLeft}>
        <FontAwesomeIcon
          className="settings_BusinessHoursPageTimeZoneElements_globe-icon"
          icon={['far', 'globe']}
        />
        <span className="settings_BusinessHoursPageTimeZoneSelect_title">
          Timezone
        </span>
      </StyledBusinessHoursPageTimeZoneElementsLeft>
    </>
  )
}

export default BusinessHoursPageTimeZoneElementsLeft
