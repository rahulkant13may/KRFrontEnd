import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-ui/core'

import { StyledErrorAlert } from './styles'

const ErrorAlert = ({ errorMessage }) => {
  return (
    <StyledErrorAlert
      severity="error"
      icon={
        <FontAwesomeIcon
          icon={['fas', 'exclamation-square']}
          className="core_ErrorAlert_icon"
        />
      }
    >
      <Typography className="core_ErrorAlert_message">
        {errorMessage}
      </Typography>
    </StyledErrorAlert>
  )
}

ErrorAlert.propTypes = {
  errorMessage: PropTypes.string.isRequired,
}

export default ErrorAlert
