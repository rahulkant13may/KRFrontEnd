import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'

const Button = ({ children, type, isSubmitting, disabled, ...restProps }) => {
  return (
    <StyledButton
      {...restProps}
      type={type}
      disabled={disabled || isSubmitting}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  type: '',
  disabled: false,
  isSubmitting: false,
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
}

export default Button
