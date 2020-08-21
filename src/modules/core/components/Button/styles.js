import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const StyledButton = styled(Button)`
  width: 100%;
  height: 48px;
  border-radius: 0px;
  text-transform: none;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    opacity: 0.5;
    cursor: not-allowed;
  }
`
