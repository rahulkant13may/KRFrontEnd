import styled from 'styled-components'
import { MenuItem } from '@material-ui/core'

export const StyledMobileMenuItem = styled(MenuItem)`
  width: 100%;
  color: ${(props) => props.theme.colors.dark_grey_blue};
  padding: 0 25px;

  &:hover {
    background-color: transparent;
  }

  .core_MobileMenuItem_inner {
    height: 88px;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .core_MobileMenuItem_start-icon {
    font-size: 20px;
    line-height: 20px;
    margin-right: 15px;
  }

  .core_MobileMenuItem_super-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  .core_MobileMenuItem_title {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    color: ${(props) =>
      props.$isSoloTitle ? 'inherit' : props.theme.colors.dark_grey};
  }

  .core_MobileMenuItem_arrow {
    font-size: 24px;
    line-height: 24px;
    margin-right: 8px;
  }
`
