import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BusinessHoursPageRegularCalendarIconText from 'modules/settings/components/BusinessHoursPageRegularCalendarIconText'

import { StyledBusinessHoursPageRegularCalendarTo } from './styles'
const iconStyle = {
  width: '16px',
  height: '16px',
}
const BusinessHoursPageRegularCalendarTo = ({textEnteredFlag, enteredTextTo}) => {
  return (
    <>
      <StyledBusinessHoursPageRegularCalendarTo>
        <BusinessHoursPageRegularCalendarIconText
          icon={'clock'}
          text={'To'}
          marginLeft={'16px'}
          textWidth={'17px'}
          width={'45px'}
          iconStyle={iconStyle}
          textEnteredFlag={textEnteredFlag}
          enteredText={enteredTextTo}
        />
     
      </StyledBusinessHoursPageRegularCalendarTo>
    </>
  )
}

export default BusinessHoursPageRegularCalendarTo
