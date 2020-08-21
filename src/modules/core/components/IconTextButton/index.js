import React from 'react'
import PropTypes from 'prop-types'

import { StyledSelectButton } from './styles'

const IconTextButton = (props) => {
  const {
    title,
    activeTitle,
    icon,
    activeIcon,
    isActive,
    onChange,
    light,
    large,
  } = props

  return (
    <StyledSelectButton
      variant="text"
      $isActive={isActive}
      $light={light}
      $large={large}
      onClick={onChange}
    >
      <div className="core_IconTextButton_icon">
        {isActive ? activeIcon : icon}
      </div>

      <div className="core_IconTextButton_text">
        {isActive && activeTitle ? activeTitle : title}
      </div>
    </StyledSelectButton>
  )
}

IconTextButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeTitle: PropTypes.string,
  activeIcon: PropTypes.node,
  isActive: PropTypes.bool,
  onChange: PropTypes.func,
  light: PropTypes.bool,
  large: PropTypes.bool,
}

IconTextButton.defaultProps = {
  activeTitle: '',
  activeIcon: null,
  isActive: false,
  onChange: null,
  light: false,
  large: false,
}

export default IconTextButton
