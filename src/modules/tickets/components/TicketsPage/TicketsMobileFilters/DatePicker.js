import React, { useState } from 'react'
import PropTypes from 'prop-types'

import DateRangePicker from '../DateRangePicker'

import { StyledDatePicker } from './styles'

const DatePicker = (props) => {
  const { startDate, endDate, setStartDate, setEndDate } = props

  const [isPickerOpen, setPickerOpen] = useState(false)

  return (
    <StyledDatePicker>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        isPickerOpen={isPickerOpen}
        setPickerOpen={setPickerOpen}
      />
    </StyledDatePicker>
  )
}

DatePicker.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
}

DatePicker.defaultProps = {
  startDate: null,
  endDate: null,
}

export default DatePicker
