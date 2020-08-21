import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const StyledSelectButton = styled(Button)`
  height: 32px;
  border-radius: 3px;
  padding: 0 14px 0 12px;
  color: ${(props) =>
    props.$light ? props.theme.colors.white : props.theme.colors.grey_blue};
  background-color: ${(props) => {
    if (!props.$isOpen && !props.$hasValue) return 'transparent'

    return props.$light
      ? props.theme.colors.blue_black
      : props.theme.colors.slate_grey
  }};

  .tickets_FilterSelect_icon {
    font-size: 14px;
    line-height: 14px;
    margin-right: 8px;
  }

  .tickets_FilterSelect_text {
    font-weight: 500;
    font-size: ${(props) => (props.$large ? '16px' : '13px')};
    text-transform: capitalize;
    margin-right: 7px;
  }

  .tickets_FilterSelect_arrow {
    font-size: ${(props) => (props.$large ? '16px' : '12px')};
    color: ${(props) =>
      props.$light ? props.theme.colors.white_blue : 'inherit'};
  }
`
