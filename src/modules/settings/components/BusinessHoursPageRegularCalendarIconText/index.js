import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledBusinessHoursPageRegularCalendarIconText } from './styles'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const BusinessHoursPageRegularCalendarIconText = ({
  icon,
  text,
  marginLeft,
  textWidth,
  width,
  iconStyle,
  textEnteredFlag,
  enteredText,
}) => {
  return (
    <>
      <StyledBusinessHoursPageRegularCalendarIconText
        style={{ marginLeft: marginLeft, width: width }}
      >
        {textEnteredFlag == true ? (
          <>
            {icon == 'calendar-day' ? (
              <FontAwesomeIcon
                style={iconStyle}
                className="settings_BusinessHoursPageRegularCalendarIconText_text-icon"
                icon={['far', icon]}
              />
            ) : (
              <FontAwesomeIcon
                className="settings_BusinessHoursPageRegularCalendarIconText_text-icon"
                icon={faClock}
              />
            )}
            {/* <i class="settings_BusinessHoursPageRegularCalendarIconText_text-icon fa fa-clock-o" aria-hidden="true"></i> */}
            <div className="settings_BusinessHoursPageRegularCalendarIconText-text-entered">
              <span
                style={{ width: textWidth }}
                className="settings_BusinessHoursPageRegularCalendarIconText-text-active"
              >
                {text}
              </span>
              <span className="settings_BusinessHoursPageRegularCalendarIconText-entered-text">
                {enteredText}
              </span>
            </div>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              style={iconStyle}
              className="settings_BusinessHoursPageRegularCalendarIconText_text-icon"
              icon={['far', icon]}
            />
            <span
              style={{ width: textWidth }}
              className="settings_BusinessHoursPageRegularCalendarIconText-text"
            >
              {text}
            </span>
          </>
        )}
      </StyledBusinessHoursPageRegularCalendarIconText>
    </>
  )
}

export default BusinessHoursPageRegularCalendarIconText
