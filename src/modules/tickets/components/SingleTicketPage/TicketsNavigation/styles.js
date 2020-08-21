import styled from 'styled-components'

export const StyledTicketsNavigation = styled.div`
  display: flex;
  align-items: center;

  .tickets_TicketsNavigation_button {
    font-size: 14px;
    line-height: 14px;
    color: ${(props) => props.theme.colors.white_blue};
    width: 30px;
    height: 30px;
  }

  .tickets_TicketsNavigation_text {
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.white};
    margin: 0 15px;
  }
`
