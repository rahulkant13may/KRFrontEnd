import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 599px) {
    width: 100%;
    padding: 10px;
  }
`
export const StyledRoot = styled.div`
  width: 512px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .auth_SubdomainLogin_global-error {
    margin-bottom: 16px;
    width: 100%;
  }
`
export const StyledLogo = styled.div`
  width: 60px;
  height: 60px;
  display: block;
  margin-bottom: 45px;
  @media (max-width: 599px) {
    margin-bottom: 20px;
  }
`
export const StyledTypography = styled.div`
  height: 36px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 47px;
  text-transform: capitalize;
  @media (max-width: 599px) {
    font-size: 26px;
    height: auto;
    line-height: 28px;
    padding: 0 10px;
    font-weight: bold;
    margin-bottom: 42px;
  }
`

export const StyledDomain = styled.span`
  padding: 19px 24px;
  font-size: 13px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.charcoal};
  height: 58px;
  width: 136px;
  background: ${(props) => props.theme.colors.white_smoke};

  @media (max-width: 599px) {
    padding: 19px 16px;
    width: 134px;
  }
`

export const StyledLink = styled(Typography)`
  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
  text-align: center;
  margin-top: 20px;

  @media ${mediaQueries.xLarge} {
    font-weight: 600;
    font-size: 13px;
    margin-top: 32px;
  }

  .auth_message_link {
    color: ${(props) => props.theme.colors.soft_blue};
  }
`
export const StyledLabel = styled.div`
  line-height: 19px;
  text-align: right;
  & .MuiTypography-body1 {
    font-size: 13px;
    @media (max-width: 599px) {
      font-size: 15px;
    }
  }
`
export const StyledForm = styled.div`
  width: 100%;
`
export const StyledButton = styled.div`
  margin-top: 4px;
`
export const StyleIconWrap = styled.div`
  margin-right: 24px;
  & .svg-inline--fa {
    margin-right: 0;
  }
  @media (max-width: 599px) {
    margin-right: 16px;
  }
`
