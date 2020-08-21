import styled from 'styled-components'

import { Typography } from '@material-ui/core'

export const StyledTableHeaderItem = styled.div`
  width: ${(props) => (props.$width ? `${props.$width}px` : '')};
`

export const StyledHeaderItemText = styled(Typography)`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.grey_blue};
  text-transform: uppercase;
`
