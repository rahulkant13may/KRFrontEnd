import React from 'react'
import PropTypes from 'prop-types'

import { Typography, Switch, Box } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledMobileMenuItem } from './styles'

const MobileMenuItem = (props) => {
  const {
    startIcon,
    title,
    superTitle,
    onClick,
    isSwitch,
    isSwitchActive,
    onSwitchChange,
    withArrow,
  } = props

  const clickHandler = () => {
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <StyledMobileMenuItem
      $isSoloTitle={title && !superTitle}
      onClick={clickHandler}
    >
      <div className="core_MobileMenuItem_inner">
        <Box display="flex" alignItems="center">
          {startIcon && (
            <span className="core_MobileMenuItem_start-icon">{startIcon}</span>
          )}

          <div>
            {superTitle && (
              <Typography className="core_MobileMenuItem_super-title">
                {superTitle}
              </Typography>
            )}

            <Typography className="core_MobileMenuItem_title">
              {title}
            </Typography>
          </div>
        </Box>

        {withArrow && (
          <span className="core_MobileMenuItem_arrow">
            <FontAwesomeIcon icon={['far', 'chevron-right']} />
          </span>
        )}

        {isSwitch && (
          <Switch
            color="primary"
            checked={isSwitchActive}
            onChange={onSwitchChange}
            onClick={(event) => event.stopPropagation()}
          />
        )}
      </div>
    </StyledMobileMenuItem>
  )
}

MobileMenuItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  isSwitchActive: PropTypes.bool,
  onSwitchChange: PropTypes.func,
  withArrow: PropTypes.bool,
  startIcon: PropTypes.node,
  superTitle: PropTypes.string,
}

MobileMenuItem.defaultProps = {
  isSwitch: false,
  isSwitchActive: false,
  withArrow: false,
  startIcon: null,
  superTitle: '',
  onClick: null,
  onSwitchChange: null,
}

export default MobileMenuItem
