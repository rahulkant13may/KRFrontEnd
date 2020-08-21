import React from 'react'
import PropTypes from 'prop-types'

import { Typography, Box } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledMobileSelectItem } from './styles'

const MobileSelectItem = (props) => {
  const { title, startIcon, isSelected, onClick } = props

  return (
    <StyledMobileSelectItem $isSelected={isSelected} onClick={onClick}>
      <div className="core_MobileSelectItem_inner">
        <Box display="flex" alignItems="center">
          {startIcon && (
            <span className="core_MobileSelectItem_start-icon">
              {startIcon}
            </span>
          )}

          <Typography className="core_MobileSelectItem_title">
            {title}
          </Typography>
        </Box>

        {isSelected && (
          <span className="core_MobileSelectItem_select-icon">
            <FontAwesomeIcon icon={['fas', 'check-circle']} />
          </span>
        )}
      </div>
    </StyledMobileSelectItem>
  )
}

MobileSelectItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  startIcon: PropTypes.node,
}

MobileSelectItem.defaultProps = {
  startIcon: null,
}

export default MobileSelectItem
