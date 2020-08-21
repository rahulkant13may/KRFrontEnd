import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BusinessHoursPageRegularCalendarIconText from 'modules/settings/components/BusinessHoursPageRegularCalendarIconText'

import { StyledBusinessHoursPageRegularCalendarWhen } from './styles'
const iconStyle = {
  width: "14px",
  height: "16px"
};
const BusinessHoursPageRegularCalendarWhen = ({textEnteredFlag, enteredTextWhen}) => {
  return (
    <>
      <StyledBusinessHoursPageRegularCalendarWhen >
        <BusinessHoursPageRegularCalendarIconText 
          icon={"calendar-day"}
          text={"When"}
          marginLeft={"17px"}
          textWidth={"41px"}
          width={"68px"}
          iconStyle={iconStyle}
          textEnteredFlag={textEnteredFlag}
          enteredText={enteredTextWhen}
        />
        <FontAwesomeIcon
          className="settings_BusinessHoursPageRegularCalendarWhen_chevron-down-icon"
          icon={['far', 'chevron-down']}
        />
      </StyledBusinessHoursPageRegularCalendarWhen>
    </>
  )
}

export default BusinessHoursPageRegularCalendarWhen
