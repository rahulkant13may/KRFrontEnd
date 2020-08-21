import React from 'react'
import PropTypes from 'prop-types'

import { StyledTableCell } from './styles'

const TableCell = ({ width, children }) => {
  return <StyledTableCell $width={width}>{children}</StyledTableCell>
}

TableCell.defaultProps = {
  width: null,
}

TableCell.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default TableCell
