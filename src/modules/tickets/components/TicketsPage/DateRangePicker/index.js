import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { format, isAfter, isFuture, isBefore } from 'date-fns'

import { Button } from '@material-ui/core'
import { DatePicker } from '@material-ui/pickers'

import { StyledDateRangePicker, StyledTextField } from './styles'

const ActivePickerEnum = {
  START_DATE: 'startDate',
  END_DATE: 'endDate',
}

const DateRangePicker = (props) => {
  const {
    isPickerOpen,
    setPickerOpen,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = props

  const { formatMessage } = useIntl()

  const [activePicker, setActivePicker] = useState(ActivePickerEnum.START_DATE)

  const getPickerValue = () => {
    if (activePicker === ActivePickerEnum.START_DATE) {
      return startDate
    }

    if (activePicker === ActivePickerEnum.END_DATE) {
      return endDate
    }

    return null
  }

  return (
    <StyledDateRangePicker>
      <div className="tickets_TimeRangePicker_date-inputs-wrapper">
        <StyledTextField
          label={formatMessage({
            id: 'tickets.start.date',
            defaultMessage: 'start date',
          })}
          variant="filled"
          color="primary"
          InputProps={{ disableUnderline: true, readOnly: true }}
          value={startDate ? format(new Date(startDate), 'dd/MMM/yyyy') : ''}
          onFocus={() => {
            setActivePicker(ActivePickerEnum.START_DATE)
            setPickerOpen(true)
          }}
        />

        <StyledTextField
          label={formatMessage({
            id: 'tickets.end.date',
            defaultMessage: 'end date',
          })}
          variant="filled"
          color="primary"
          InputProps={{ disableUnderline: true, readOnly: true }}
          value={endDate ? format(new Date(endDate), 'dd/MMM/yyyy') : ''}
          onFocus={() => {
            setActivePicker(ActivePickerEnum.END_DATE)
            setPickerOpen(true)
          }}
        />
      </div>

      {isPickerOpen && (
        <div className="tickets_TimeRangePicker_picker">
          <DatePicker
            variant="static"
            disableToolbar
            initialFocusedDate={
              activePicker === ActivePickerEnum.START_DATE && endDate
                ? endDate
                : null
            }
            shouldDisableDate={(date) => {
              if (isFuture(date)) {
                return true
              }

              const isStartDateAndAfterEndDate =
                activePicker === ActivePickerEnum.START_DATE &&
                endDate &&
                isAfter(date, new Date(endDate))

              const isEndDateAndBeforeStartDate =
                activePicker === ActivePickerEnum.END_DATE &&
                startDate &&
                isBefore(date, new Date(startDate))

              if (isStartDateAndAfterEndDate || isEndDateAndBeforeStartDate) {
                return true
              }

              return false
            }}
            value={getPickerValue()}
            onChange={(value) => {
              setPickerOpen(false)
              if (activePicker === ActivePickerEnum.START_DATE) {
                return setStartDate(new Date(value).toISOString())
              }
              return setEndDate(new Date(value).toISOString())
            }}
          />

          <div className="tickets_TimeRangePicker_picker-clear-btn">
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                setPickerOpen(false)
                if (activePicker === ActivePickerEnum.START_DATE) {
                  return setStartDate(null)
                }
                return setEndDate(null)
              }}
            >
              {formatMessage({
                id: 'tickets.none',
                defaultMessage: 'none',
              })}
            </Button>
          </div>
        </div>
      )}
    </StyledDateRangePicker>
  )
}

DateRangePicker.propTypes = {
  isPickerOpen: PropTypes.bool.isRequired,
  setPickerOpen: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
}

DateRangePicker.defaultProps = {
  startDate: null,
  endDate: null,
}

export default DateRangePicker
