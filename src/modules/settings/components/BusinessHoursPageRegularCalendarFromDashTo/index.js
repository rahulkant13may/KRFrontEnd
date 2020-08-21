import React from 'react'

import BusinessHoursPageRegularCalendarFrom from 'modules/settings/components/BusinessHoursPageRegularCalendarFrom'
import BusinessHoursPageRegularCalendarTo from 'modules/settings/components/BusinessHoursPageRegularCalendarTo'

import { StyledBusinessHoursPageRegularCalendarFromDashTo} from './styles'

const BusinessHoursPageRegularCalendarFromDashTo = ({textEnteredFlag, enteredTextFrom, enteredTextTo}) => {
  return (
    <>
    <StyledBusinessHoursPageRegularCalendarFromDashTo>
        <BusinessHoursPageRegularCalendarFrom 
            textEnteredFlag={textEnteredFlag} enteredTextFrom={enteredTextFrom}/>
        <span className="settings_BusinessHoursPageRegularCalendarFromDashTo_Dash">-</span>
        <BusinessHoursPageRegularCalendarTo 
            textEnteredFlag={textEnteredFlag} enteredTextTo={enteredTextTo}/>
    </StyledBusinessHoursPageRegularCalendarFromDashTo>
    </>
  )
}

export default BusinessHoursPageRegularCalendarFromDashTo
