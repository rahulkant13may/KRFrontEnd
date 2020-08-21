import React from 'react'
import PropTypes from 'prop-types'

import { StyledTableListItem } from './styles'

const TableListItem = ({ large, children }) => {
  return <StyledTableListItem $large={large}>{children}</StyledTableListItem>
}

TableListItem.defaultProps = {
  large: false,
}

TableListItem.propTypes = {
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default TableListItem
