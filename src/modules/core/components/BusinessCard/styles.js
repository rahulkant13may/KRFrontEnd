import styled from 'styled-components'

import { Avatar, Typography } from '@material-ui/core'

export const StyledBusinessCard = styled.div`
  width: 250px;
  height: 100%;
  padding-left: 5px;
  display: flex;
  align-items: center;
`

export const StyledAvatar = styled(Avatar)`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`

export const StyledInfoWrapper = styled.div`
  width: 218px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const StyledBusinessInfo = styled(Typography)`
  font-weight: ${(props) => (props.variant === 'h1' ? 600 : 300)};
  font-size: ${(props) => (props.variant === 'h1' ? '15px' : '13px')};
  color: ${(props) =>
    props.variant === 'h1'
      ? props.theme.colors.darker_grey
      : props.theme.colors.mild_grey};
  position: relative;
  top: ${(props) => (props.variant === 'h1' ? '0' : '1px')};
  align-self: flex-start;
`
