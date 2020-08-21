import styled from 'styled-components'

export const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const StyledRoot = styled.div`
  width: 512px;
  display: flex;
  margin: 80px auto;
  flex-direction: column;
  align-items: center;
  @media (max-width: 599px) {
    width: 100%;
    padding: 16px;
    margin: 30px auto 40px;
  }

  .auth_Signup_global-error {
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
  @media (max-width: 599px) {
    font-size: 26px;
    height: auto;
    line-height: 28px;
    padding: 0 10px;
    margin-bottom: 42px;
    font-weight: bold;
  }
  color: ${(props) => props.theme.colors.black};
  text-transform: capitalize;
  margin-bottom: 43px;
`
export const StyledWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0;

  & .MuiFormControl-root {
    & .MuiFormGroup-root {
      justify-content: center;
      & .MuiFormControlLabel-root {
        margin-right: 12px;
        & .MuiTypography-root {
          font-size: 13px;
          line-height: 19px;
          color: ${(props) => props.theme.colors.nero};
        }
        & .PrivateSwitchBase-root-1 {
          padding: 0;
          & .MuiIconButton-label {
            & .MuiSvgIcon-root {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
`
export const StyledForm = styled.div`
  width: 100%;
`
export const StyledButton = styled.div`
  margin-top: 4px;
`
export const StyledIcon = styled.span`
  margin-right: 24px;
  font-size: 13px;
  line-height: 19px;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.silver2};
  & .svg-inline--fa {
    margin-right: 0;
  }
  @media (max-width: 599px) {
    margin-right: 16px;
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
export const StyledAgree = styled.span`
  margin-right: 4px;
`
export const StyledCardTemplate = styled.div`
  margin-bottom: 29px;
  & .sc-AxiKw {
    margin-bottom: 0;
  }
`
export const StyledCardWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  border: 1px solid ${(props) => props.theme.colors.purple};
  ${({ error, theme }) => error && `border: 1px solid ${theme.colors.red};`}

  & .cMvmqS {
    padding: 19px 21px 19px 16px;
  }

  @media (max-width: 599px) {
    flex-direction: column;
  }
`
export const StyledCvvText = styled.div`
  flex: 1;

  & .MuiFormControl-root {
    & .MuiFormLabel-root {
      font-size: 13px;
      color: ${(props) => props.theme.colors.grey_blue};
      ${({ error, theme }) =>
        error &&
        `
            color:  ${theme.colors.red};
          `}
    }
  }
  & .cMvmqS {
    padding: 14px 14px 14px 16px;
  }
`
export const StyledDateText = styled.div`
  flex: 1;
  & .MuiFormControl-root {
    & .MuiFormLabel-root {
      font-size: 13px;
      color: ${(props) => props.theme.colors.grey_blue};
      ${({ error, theme }) =>
        error &&
        `
            color:  ${theme.colors.red};
          `}
    }
  }
  & .cMvmqS {
    padding: 19px 21px 19px 16px;
  }
`
export const StyledZipText = styled.div`
  flex: 1.5;
  & .MuiFormControl-root {
    & .MuiFormLabel-root {
      font-size: 13px;
      color: ${(props) => props.theme.colors.grey_blue};
      ${({ error, theme }) =>
        error &&
        `
            color:  ${theme.colors.red};
          `}
    }
  }
  & .cMvmqS {
    padding: 14px 22px 14px 24px;
  }
`
export const StyledCardText = styled.div`
  flex: 2;
  & .MuiFormControl-root {
    & .MuiFormLabel-root {
      font-size: 13px;
      color: ${(props) => props.theme.colors.grey_blue};
      ${({ error, theme }) =>
        error &&
        `
            color:  ${theme.colors.red};
          `}
    }
  }
  @media (max-width: 599px) {
    width: 100%;
  }
`
export const StyledFreeTrialWrap = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyledTextWrap = styled.div`
  font-size: 13px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`
export const StyledBoxWrap = styled.div`
  background: ${(props) => props.theme.colors.purple};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyledFreeTrial = styled.span`
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.white};
`
export const StyledFeature = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};

  & .svg-inline--fa {
    margin-right: 8px;
  }
`
export const StyledWrapCardDetail = styled.div`
  display: flex;
  flex: 3;
`

export const StyledTextFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.chineseWhite};
  ${({ error, theme }) => error && `border: 1px solid ${theme.colors.red};`}
  height: 60px;
  border-radius: 0px;
  padding-left: 0;
  background-color: ${(props) => props.theme.colors.white};
`
export const StyledValidation = styled.div`
  font-size: 13px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.red};
`
export const StyledValidationWrapper = styled.div`
  margin-bottom: 30px;
  padding-left: 16px;
`
