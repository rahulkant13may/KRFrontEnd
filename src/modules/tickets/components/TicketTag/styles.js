import styled from 'styled-components'
import { Chip } from '@material-ui/core'

export const StyledTag = styled(Chip).attrs((props) => {
  const attrs = {}

  switch (props.$variant) {
    case 'light':
      attrs.$background = props.theme.colors.light_mild_grey
      attrs.$color = props.theme.colors.dim_grey
      break

    case 'dark':
      attrs.$background = props.theme.colors.soft_grey
      attrs.$color = props.theme.colors.white
      break

    case 'error':
      attrs.$background = props.theme.colors.light_red
      attrs.$color = props.theme.colors.error
      break

    default:
      break
  }

  return attrs
})`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  border-radius: 2px;
  padding: 2px 4px;
  background-color: ${(props) => props.$background};

  .MuiChip-label {
    display: block;
    padding: 0;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${(props) => props.$color};
  }

  .tickets_tag_icon {
    margin-left: 7px;
  }
`
