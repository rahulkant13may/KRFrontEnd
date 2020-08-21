import React from 'react'
import PropTypes from 'prop-types'

import { StyledLink } from './styles'

const Link = ({ onClick, children, isButton, href }) => {
  return (
    <StyledLink
      id="link"
      onClick={onClick}
      {...(isButton
        ? { component: 'button' }
        : { href, target: '_blank', rel: 'noopener' })}
    >
      {children}
    </StyledLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isButton: PropTypes.bool,
  href: PropTypes.string,
}

Link.defaultProps = {
  onClick: () => {},
  isButton: false,
  href: '',
}

export default Link
