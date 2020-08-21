import styled from 'styled-components'

import { Button } from '@material-ui/core'

export const StyledSelectButton = styled(Button)`
  height: 32px;
  border-radius: 3px;
  color: ${(props) =>
    props.$light
      ? props.theme.colors.white_blue
      : props.theme.colors.grey_blue};
  background-color: ${(props) => {
    if (!props.$isActive)
      return props.$light
        ? props.theme.colors.secondary
        : props.theme.colors.light_dim_grey

    return props.$light
      ? props.theme.colors.blue_black
      : props.theme.colors.slate_grey
  }};

  &:focus {
    background-color: ${(props) => {
      if (!props.$isActive)
        return props.$light
          ? props.theme.colors.secondary
          : props.theme.colors.light_dim_grey

      return props.$light
        ? props.theme.colors.blue_black
        : props.theme.colors.slate_grey
    }};
  }

  .core_IconTextButton_icon {
    font-size: ${(props) => (props.$large ? '16px' : '14px')};
    line-height: ${(props) => (props.$large ? '16px' : '14px')};
    margin-right: 8px;
  }

  .core_IconTextButton_text {
    color: ${(props) =>
      props.$light ? props.theme.colors.white : props.theme.colors.grey_blue};
    font-weight: 500;
    font-size: ${(props) => (props.$large ? '15px' : '13px')};
    line-height: ${(props) => (props.$large ? '22px' : '19px')};
    text-transform: capitalize;
  }
`
