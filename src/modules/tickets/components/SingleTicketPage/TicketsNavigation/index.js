import React from 'react'
import PropTypes from 'prop-types'

import { IconButton, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledTicketsNavigation } from './styles'

const TicketsNavigation = (props) => {
  const { ticketIndex, totalCount, onBack, onNext } = props

  return (
    <StyledTicketsNavigation>
      <IconButton className="tickets_TicketsNavigation_button" onClick={onBack}>
        <FontAwesomeIcon icon={['far', 'chevron-left']} />
      </IconButton>

      <Typography className="tickets_TicketsNavigation_text">
        {`${ticketIndex} of ${totalCount}`}
      </Typography>

      <IconButton className="tickets_TicketsNavigation_button" onClick={onNext}>
        <FontAwesomeIcon icon={['far', 'chevron-right']} />
      </IconButton>
    </StyledTicketsNavigation>
  )
}

TicketsNavigation.propTypes = {
  ticketIndex: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default TicketsNavigation
