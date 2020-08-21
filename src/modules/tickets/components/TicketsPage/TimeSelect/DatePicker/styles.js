import styled from 'styled-components'

export const StyledDatePicker = styled.div`
  width: 337px;
  display: flex;
  flex-direction: column;
  padding: 16px 0;

  .tickets_TimeRangePicker_head {
    width: 100%;
    padding: 0 16px;
    margin-bottom: 12px;
  }

  .tickets_TimeRangePicker_title-wrapper {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
  }

  .tickets_TimeRangePicker_back-button {
    width: 22px;
    height: 22px;
    font-size: 12px;
    line-height: 12px;
    margin-right: 11px;
    padding: 0;
    color: ${(props) => props.theme.colors.dark_grey};
  }

  .tickets_TimeRangePicker_title {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
  }

  .tickets_TimeRangePicker_apply-btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    padding: 0 16px;

    button {
      color: ${(props) => props.theme.colors.white};
      width: 71px;
      height: 32px;
      box-shadow: none;
      text-transform: capitalize;
      font-weight: 600;
      font-size: 13px;
      line-height: 19px;
    }
  }
`
