import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { StyledPopover } from './styles'

const Popover = (props) => {
  const { isOpen, renderTrigger, children, ...restProps } = props

  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    if (!isOpen && anchorEl) {
      handleClose()
    }
  }, [anchorEl, isOpen])

  const open = Boolean(anchorEl && isOpen)
  const id = open ? 'popover' : undefined

  return (
    <>
      {renderTrigger(handleOpen, handleClose)}

      <StyledPopover
        PaperProps={{ className: 'core_Popover' }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock
        {...restProps}
      >
        {children}
      </StyledPopover>
    </>
  )
}

Popover.propTypes = {
  renderTrigger: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
}

Popover.defaultProps = {
  isOpen: true,
}

export default Popover
