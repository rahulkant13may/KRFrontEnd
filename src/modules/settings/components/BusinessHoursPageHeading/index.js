import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledBusinessHoursPageHeading } from './styles'

const BusinessHoursPageHeading = () => {
  return (
    <>
      <StyledBusinessHoursPageHeading>
        <FontAwesomeIcon
          className="settings_BusinessHoursPage_arrow-left-icon"
          icon={['far', 'arrow-left']}
        />
        <span className="settings_BusinessHoursPage_title">Business Hours</span>
      </StyledBusinessHoursPageHeading>
    </>
  )
}

export default BusinessHoursPageHeading
