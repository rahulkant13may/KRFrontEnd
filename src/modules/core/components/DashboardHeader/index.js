import React from 'react'
import PropTypes from 'prop-types'

import { StyledDashboardHeader } from './styles'

const DashboardHeader = ({ children, large }) => {
  return (
    <StyledDashboardHeader $large={large}>{children}</StyledDashboardHeader>
  )
}

DashboardHeader.defaultProps = {
  large: false,
}

DashboardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  large: PropTypes.bool,
}

export default DashboardHeader
