import styled from 'styled-components'

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

  .auth_LoginForm_global-error {
    margin-bottom: 16px;
    width: 100%;
  }

  .auth_LoginForm_url {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 48px;
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
  margin-bottom: 6px;
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
export const StyledWrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.mild_grey};
  flex-direction: row;
  align-items: center;
  padding: 0 0 13px;
  justify-content: space-between;
  & .MuiFormControl-root {
    flex-grow: 1;
    & .MuiFormGroup-root {
      & .MuiFormControlLabel-root {
        margin-left: -8px;
        & .MuiTypography-root {
          font-size: 13px;
          margin-left: 3px;
          @media (max-width: 599px) {
            font-size: 15px;
          }
        }
        & .MuiSvgIcon-root {
          width: 18px;
          height: 16px;
        }
      }
    }
  }
`
export const StyledLink = styled.div`
  padding: 27px 0;
  display: flex;
  @media (max-width: 599px) {
    font-size: 16px;
  }

  & .MuiTypography-root {
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    text-align: right;
    margin-left: 5px;
    @media (max-width: 599px) {
      font-size: 16px;
    }
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
