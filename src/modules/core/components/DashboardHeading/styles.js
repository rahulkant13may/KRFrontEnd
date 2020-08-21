import styled from 'styled-components'

import { Typography } from '@material-ui/core'

export const StyledHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.nero};
  margin-top: ${(props) => (props.$hasParagraph ? '-8px' : '0')};
`

export const StyledHeading = styled(Typography)`
  font-size: ${(props) => (props.$hasParagraph ? '21px' : '24px')};
  font-weight: 600;
  margin: 0;
  text-transform: capitalize;
`

export const StyledParagraph = styled(Typography)`
  font-size: 14px;
  margin: 0;
`
