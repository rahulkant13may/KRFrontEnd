import styled from 'styled-components'

import { Box } from '@material-ui/core'

export const StyledTableListItem = styled(Box)`
  width: 100%;
  height: ${(props) => (props.$large ? '72px' : '56px')};
  padding-left: 24px;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.border_blue};

  display: flex;
  align-items: center;
`
