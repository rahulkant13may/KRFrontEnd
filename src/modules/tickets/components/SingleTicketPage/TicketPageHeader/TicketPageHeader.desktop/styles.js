import styled from 'styled-components'
import { AppBar } from '@material-ui/core'

export const StyledDesktopTicketPageHeader = styled(AppBar)`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0 12px;
  width: calc(100% - 64px);
  height: 56px;
  left: 64px;
  flex-direction: row;
  align-content: stretch;

  .tickets_DesktopTicketPageHeader_inner {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .tickets_DesktopTicketPageHeader_back-button {
    padding: 12px;
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    line-height: 16px;
    margin-right: 8px;
  }

  .tickets_DesktopTicketPageHeader_actions {
    display: flex;
    align-items: center;
    margin-right: auto;
  }

  .tickets_DesktopTicketPageHeader_action {
    margin-right: 8px;
  }
`

export const StyledContent = styled.main`
  background-color: ${(props) => props.theme.colors.white};
  padding-top: 56px;
`
