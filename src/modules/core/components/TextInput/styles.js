import styled from 'styled-components'

export const StyledTextFieldWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${(props) =>props.theme.colors.chineseWhite};
    ${({ error, theme }) => error && `
    border: 1px solid ${theme.colors.red};
  `}
  ${({ error, displayError, theme }) => error && !displayError && `
    border: 1px solid ${theme.colors.red};
  `}
    height: 60px;
    border-radius: 0px;
    padding-left: 26px;    
    background-color: ${(props) => props.theme.colors.white};
    & .MuiInput-underline:before{
        border-bottom: none !important;
        }
    }  
    & .MuiInput-underline:after{
        border-bottom: none;
    }
    & .svg-inline--fa{
        font-size: 20px;
        margin-right: 14px;
        margin-top: 3px;
        color: ${(props) => props.theme.colors.gray62};       
    }
    & .MuiFormControl-root {
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        & .MuiFormLabel-root{  
            font-size: 15px;   
            @media(max-width: 599px) {
                font-size: 13px;   
              }    
            ${({ error, theme }) => error && `
            color:  ${theme.colors.red};
          `} 
        }
    }
    & .MuiInputBase-input {
        font-size: 15px; 
        line-height: 22px;
        padding-top: 0;
        padding-bottom: 5px;           
    }
    & .MuiInputLabel-shrink {
        transform: translate(0, 11px) scale(0.90);
        transform-origin: top left;
        font-size: 11px !important;
        line-height: 16px;
        height: 17px;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.colors.gray62};     
    }
    & .MuiFormHelperText-root {
        position: absolute;
        top: 60px;
    }
    @media(max-width: 599px) {
        padding-left: 16px;
      }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
`
export const StyledWrapper = styled.div`
    margin-bottom: 24px;    
`
export const StyledBox = styled.div`
    font-size: 13px;
    color: ${(props) => props.theme.colors.red};
    line-height: 19px;
    height: 20px;
    letter-spacing: 0;
    margin-left: 27px;
    padding-top: 5px;
`
