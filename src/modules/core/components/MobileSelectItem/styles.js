import styled from 'styled-components'
import { MenuItem } from '@material-ui/core'

export const StyledMobileSelectItem = styled(MenuItem)`
  width: 100%;
  color: ${(props) => props.theme.colors.dark_grey_blue};
  padding: 0 25px;
  background-color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.light_dim_grey
      : props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
  }

  .core_MobileSelectItem_inner {
    height: 88px;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .core_MobileSelectItem_start-icon {
    font-size: 24px;
    line-height: 24px;
    margin-right: 12px;
    color: ${(props) => props.theme.colors.dark_grey_blue};
  }

  .core_MobileSelectItem_title {
    font-weight: ${(props) => (props.$isSelected ? 600 : 500)};
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.nero};
  }

  .core_MobileSelectItem_select-icon {
    font-size: 24px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.primary};
  }
`
