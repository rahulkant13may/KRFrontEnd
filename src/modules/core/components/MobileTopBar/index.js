import React from 'react'
import PropTypes from 'prop-types'

import { Typography, IconButton, AppBar } from '@material-ui/core'

import { StyledMobileTopBar } from './styles'

const MobileTopBar = (props) => {
  const {
    children,
    leftIcon,
    onLeftIconClick,
    title,
    rightElement,
    height,
  } = props

  return (
    <StyledMobileTopBar $height={height}>
      <AppBar className="core_MobileTopBar_head" position="sticky">
        {leftIcon && (
          <IconButton
            className="core_MobileTopBar_leftButton"
            onClick={onLeftIconClick}
          >
            {leftIcon}
          </IconButton>
        )}

        {title && (
          <Typography
            variant="h1"
            className="core_MobileTopBar_title"
            unselectable="on"
          >
            {title}
          </Typography>
        )}

        {rightElement && (
          <div className="core_MobileTopBar_rightElement">{rightElement}</div>
        )}
      </AppBar>

      <main className="core_MobileTopBar_content">{children}</main>
    </StyledMobileTopBar>
  )
}

MobileTopBar.propTypes = {
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  onLeftIconClick: PropTypes.func,
  rightElement: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.number,
}

MobileTopBar.defaultProps = {
  leftIcon: null,
  onLeftIconClick: () => {},
  rightElement: null,
  title: '',
  height: 72,
}

export default MobileTopBar
