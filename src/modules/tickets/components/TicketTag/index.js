import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledTag } from './styles'

const TicketTag = (props) => {
  const { title, variant, ...restProps } = props

  return (
    <StyledTag
      deleteIcon={
        <FontAwesomeIcon icon={['far', 'times']} className="tickets_tag_icon" />
      }
      label={title}
      $variant={variant}
      {...restProps}
    />
  )
}

TicketTag.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(['light', 'dark', 'error']),
}

TicketTag.defaultProps = {
  variant: 'light',
}

export default TicketTag
