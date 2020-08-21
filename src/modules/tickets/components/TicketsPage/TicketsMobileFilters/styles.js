import styled from 'styled-components'

import { Button } from '@material-ui/core'
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledDrawerContent = styled.div`
  width: 100vw;

  @media ${mediaQueries.medium} {
    width: 414px;
  }
`

export const StyledSubmitButton = styled(Button)`
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.02em;
  box-shadow: none;
  padding: 12px;
  border-radius: 3px;
`

export const StyledDatePicker = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`
