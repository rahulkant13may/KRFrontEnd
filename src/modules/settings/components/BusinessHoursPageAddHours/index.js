import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlusCircle as faPlusCircle }  from '@fortawesome/free-regular-svg-icons'
import { faPlusCircle } from '@fortawesome/pro-regular-svg-icons'
import { StyledBusinessHoursPageAddHours } from './styles'

const BusinessHoursPageAddHours = () => {
  return (
    <>
      <StyledBusinessHoursPageAddHours>
        <FontAwesomeIcon
          className="settings_BusinessHoursPageAddHours-icon-plus-circle"
          icon={faPlusCircle}
        />
        <div className="settings_BusinessHoursPageAddHours-text">
          Add Business Hours
        </div>
      </StyledBusinessHoursPageAddHours>
    </>
  )
}

export default BusinessHoursPageAddHours
