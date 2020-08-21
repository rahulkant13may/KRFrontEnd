import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BusinessHoursPageRegularCalendarIconText from 'modules/settings/components/BusinessHoursPageRegularCalendarIconText'

import { StyledBusinessHoursPageRegularCalendarFrom } from './styles'
const iconStyle = {
  width: '16px',
  height: '16px',
}
const BusinessHoursPageRegularCalendarFrom = ({ textEnteredFlag, enteredTextFrom }) => {
  return (
    <>
      <StyledBusinessHoursPageRegularCalendarFrom>
        <BusinessHoursPageRegularCalendarIconText
          icon={'clock'}
          text={'From'}
          marginLeft={'16px'}
          textWidth={'36px'}
          width={'64px'}
          iconStyle={iconStyle}
          textEnteredFlag={textEnteredFlag}
          enteredText={enteredTextFrom}
        />
      </StyledBusinessHoursPageRegularCalendarFrom>
    </>
  )
}

export default BusinessHoursPageRegularCalendarFrom
