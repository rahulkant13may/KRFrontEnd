import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledMenuItem, StyledItemIcon, StyledItemText } from './styles'

const MenuItem = (props) => {
  const {
    text,
    onClick,
    icon,
    selected,
    withSelectionIcon,
    width,
    isTitle,
    withBorderTop,
    ...restProps
  } = props

  const clickHandler = () => {
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <StyledMenuItem
      selected={selected}
      onClick={clickHandler}
      $width={width}
      $isTitle={isTitle}
      $withBorderTop={withBorderTop}
      {...restProps}
    >
      <div className="core_MenuItem_text">
        {icon && <StyledItemIcon>{icon}</StyledItemIcon>}

        <StyledItemText $isTitle={isTitle}>{text}</StyledItemText>
      </div>

      {withSelectionIcon && selected && (
        <Icon className="core_MenuItem_select-icon">
          <FontAwesomeIcon icon={['fas', 'check-circle']} />
        </Icon>
      )}
    </StyledMenuItem>
  )
}

MenuItem.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  selected: PropTypes.bool,
  withSelectionIcon: PropTypes.bool,
  width: PropTypes.number,
  isTitle: PropTypes.bool,
  withBorderTop: PropTypes.bool,
}

MenuItem.defaultProps = {
  icon: null,
  selected: false,
  withSelectionIcon: false,
  width: null,
  isTitle: false,
  withBorderTop: false,
  onClick: null,
}

export default MenuItem
