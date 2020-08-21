import React from 'react'
import PropTypes from 'prop-types'

import { StyledTableHeader } from './styles'

const TableHeader = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>
}

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TableHeader
