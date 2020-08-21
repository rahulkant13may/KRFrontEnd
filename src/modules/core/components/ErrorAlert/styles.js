import styled from 'styled-components'

import { Alert } from '@material-ui/lab'

export const StyledErrorAlert = styled(Alert)`
  height: 60px;
  background-color: ${(props) => props.theme.colors.lighter_red};
  border: 1px solid ${(props) => props.theme.colors.red};
  width: 100%;
  align-items: center;
  border-radius: 0;

  .core_ErrorAlert_icon {
    font-weight: 900;
    font-size: 20px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.red};
  }

  .core_ErrorAlert_message {
    font-size: 15px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.red};
  }
`
