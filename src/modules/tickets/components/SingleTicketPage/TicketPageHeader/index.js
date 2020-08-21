import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import PropTypes from 'prop-types'

import DesktopTicketPageHeader from './TicketPageHeader.desktop'
import MobileTicketPageHeader from './TicketPageHeader.mobile'

const TicketPageHeader = ({ children }) => {
  const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'))

  return isMobileScreen ? (
    <MobileTicketPageHeader>{children}</MobileTicketPageHeader>
  ) : (
    <DesktopTicketPageHeader>{children}</DesktopTicketPageHeader>
  )
}

TicketPageHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TicketPageHeader
