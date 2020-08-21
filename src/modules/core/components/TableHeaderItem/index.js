import React from 'react'
import PropTypes from 'prop-types'

import { StyledTableHeaderItem, StyledHeaderItemText } from './styles'

const TableHeaderItem = ({ width, children }) => {
  return (
    <StyledTableHeaderItem $width={width}>
      <StyledHeaderItemText>{children}</StyledHeaderItemText>
    </StyledTableHeaderItem>
  )
}

TableHeaderItem.defaultProps = {
  width: null,
}

TableHeaderItem.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default TableHeaderItem
