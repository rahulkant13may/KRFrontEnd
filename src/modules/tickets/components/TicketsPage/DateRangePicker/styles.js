import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const StyledDateRangePicker = styled.div`
  .tickets_TimeRangePicker_date-inputs-wrapper {
    width: 100%;
    display: flex;
    margin-bottom: 40px;
  }

  .tickets_TimeRangePicker_picker {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPickersDay-daySelected {
      color: ${(props) => props.theme.colors.white};
    }
  }

  .tickets_TimeRangePicker_picker-clear-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 18px;
    margin-top: 8px;

    button {
      width: 71px;
      height: 32px;
      box-shadow: none;
      text-transform: capitalize;
      font-weight: 600;
      font-size: 13px;
      line-height: 19px;
      background-color: ${(props) => props.theme.colors.light_grey};
    }
  }
`

export const StyledTextField = styled(TextField)`
  width: 50%;
  height: 50px;

  .MuiFilledInput-root {
    background-color: transparent;
    border-radius: 0;
  }

  .MuiFormLabel-root {
    text-transform: capitalize;
  }

  .MuiInputLabel-filled.MuiInputLabel-shrink {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
  }

  input {
    border: 1px solid
      ${(props) =>
        props.value
          ? props.theme.colors.primary
          : props.theme.colors.light_grey};

    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
    }
  }
`
