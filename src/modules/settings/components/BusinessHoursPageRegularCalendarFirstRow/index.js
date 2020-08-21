import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BusinessHoursPageRegularCalendarWhen from 'modules/settings/components/BusinessHoursPageRegularCalendarWhen'
import BusinessHoursPageRegularCalendarFromDashTo from 'modules/settings/components/BusinessHoursPageRegularCalendarFromDashTo'
import { faTrashAlt as faTrashAlt }  from '@fortawesome/free-regular-svg-icons'

import { StyledBusinessHoursPageRegularCalendarRow } from './styles'

const BusinessHoursPageRegularCalendarRow = () => {
  return (
    <>
      <StyledBusinessHoursPageRegularCalendarRow>
        <BusinessHoursPageRegularCalendarWhen 
          textEnteredFlag={true} enteredTextWhen={"Everyday"}/>
        <BusinessHoursPageRegularCalendarFromDashTo 
          textEnteredFlag={true} enteredTextFrom={"09:00 AM"} enteredTextTo={"05:00 PM"}/>
        <FontAwesomeIcon
                className="settings_BusinessHoursPageTimeZoneElements_trash-icon"
                icon={faTrashAlt}
          />
      </StyledBusinessHoursPageRegularCalendarRow>
    </>
  )
}

export default BusinessHoursPageRegularCalendarRow
