import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import { IconButton, Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DateRangePicker from '../../DateRangePicker'

import { StyledDatePicker } from './styles'

const DatePicker = (props) => {
  const { back, onApply, startDate, endDate } = props

  const { formatMessage } = useIntl()

  const [isPickerOpen, setPickerOpen] = useState(false)

  const [pickerStartDate, setPickerStartDate] = useState(startDate)
  const [pickerEndDate, setPickerEndDate] = useState(endDate)

  return (
    <StyledDatePicker>
      <div className="tickets_TimeRangePicker_head">
        <div className="tickets_TimeRangePicker_title-wrapper">
          <IconButton
            className="tickets_TimeRangePicker_back-button"
            onClick={back}
          >
            <FontAwesomeIcon icon={['fal', 'arrow-left']} />
          </IconButton>

          <div className="tickets_TimeRangePicker_title">
            {formatMessage({
              id: 'tickets.custom.range',
              defaultMessage: 'custom range',
            })}
          </div>
        </div>

        <DateRangePicker
          startDate={pickerStartDate}
          endDate={pickerEndDate}
          setStartDate={setPickerStartDate}
          setEndDate={setPickerEndDate}
          isPickerOpen={isPickerOpen}
          setPickerOpen={setPickerOpen}
        />
      </div>

      {!isPickerOpen && (
        <div className="tickets_TimeRangePicker_apply-btn">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onApply(pickerStartDate, pickerEndDate)}
            disabled={!pickerStartDate && !pickerEndDate}
          >
            {formatMessage({
              id: 'tickets.apply',
              defaultMessage: 'apply',
            })}
          </Button>
        </div>
      )}
    </StyledDatePicker>
  )
}

DatePicker.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  back: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
}

DatePicker.defaultProps = {
  startDate: null,
  endDate: null,
}

export default DatePicker
