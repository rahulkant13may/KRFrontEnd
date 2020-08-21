import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { format, isValid } from 'date-fns'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DatePicker } from '@material-ui/pickers'
import { Typography, Button } from '@material-ui/core'

import FilterSelect from '../../FilterSelect'

import { StyledReminderSelect } from './styles'

const ReminderSelect = (props) => {
  const { date, ...restProps } = props

  const { formatMessage } = useIntl()

  return (
    <FilterSelect
      icon={
        date ? (
          <FontAwesomeIcon icon={['fas', 'bell-on']} />
        ) : (
          <FontAwesomeIcon icon={['far', 'bell-slash']} />
        )
      }
      value={
        date && isValid(new Date(date))
          ? format(new Date(date), 'dd/MMM/yyyy')
          : null
      }
      {...restProps}
    >
      {(closeDropdown) => (
        <StyledReminderSelect>
          <div className="tickets_ReminderSelect_title-wrapper">
            <Typography className="tickets_ReminderSelect_title">
              {formatMessage({
                id: 'tickets.reminder',
                defaultMessage: 'reminder',
              })}
            </Typography>
          </div>

          <DatePicker
            variant="static"
            disableToolbar
            value={date}
            onChange={() => closeDropdown()}
            disablePast
          />

          <div className="tickets_ReminderSelect_footer">
            <Button className="tickets_ReminderSelect_clear-button">
              {formatMessage({
                id: 'tickets.none',
                defaultMessage: 'none',
              })}
            </Button>
          </div>
        </StyledReminderSelect>
      )}
    </FilterSelect>
  )
}

ReminderSelect.propTypes = {
  date: PropTypes.string,
}

ReminderSelect.defaultProps = {
  date: null,
}

export default ReminderSelect
