import styled from 'styled-components'
import { Avatar, ListItem } from '@material-ui/core'

export const StyledUserPopoverMenu = styled.div`
  background-color: ${(props) => props.theme.colors.dark_grey};
  color: ${(props) => props.theme.colors.white};
  width: 256px;
  border-radius: 1px;
  overflow: hidden;

  .core_UserPopoverMenu_head {
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid ${(props) => props.theme.colors.mild_grey};
  }

  .core_UserPopoverMenu_avatar {
    margin-right: 12px;
  }

  .core_UserPopoverMenu_user-name {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    width: 170px;
  }

  .core_UserPopoverMenu_user-email {
    font-size: 14px;
    line-height: 21px;
    width: 170px;
  }

  .core_UserPopoverMenu_menu {
    padding: 8px 0;
  }
`

export const StyledAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
`

export const StyledMenuItem = styled(ListItem)`
  height: 48px;
  padding: 0 15px;

  .core_UserPopoverMenu_menu-item-icon {
    font-size: 18px;
    line-height: 18px;
    color: ${(props) => props.theme.colors.silver2};
    margin-right: 14px;
  }

  .core_UserPopoverMenu_menu-item-text {
    font-size: 14px;
    line-height: 12px;
    text-transform: capitalize;
  }
`
