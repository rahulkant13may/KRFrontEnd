import styled from 'styled-components'

export const StyledReminderSelect = styled.div`
  .tickets_ReminderSelect_title-wrapper {
    padding: 16px 16px 0;
  }

  .tickets_ReminderSelect_title {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    margin-bottom: 4px;
    color: ${(props) => props.theme.colors.charcoal};
  }

  .MuiPickersDay-daySelected {
    color: ${(props) => props.theme.colors.white};
  }

  .tickets_ReminderSelect_footer {
    display: flex;
    justify-content: flex-end;
    padding: 0 16px 16px;
  }

  .tickets_ReminderSelect_clear-button {
    height: 32px;
    background-color: ${(props) => props.theme.colors.chineseWhite};
    color: ${(props) => props.theme.colors.nero};
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    text-transform: capitalize;
  }
`
