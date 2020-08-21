import styled from 'styled-components'

export const StyledHeaderLeftElement = styled.div`
  display: flex;
  align-items: center;

  .tickets_MobileTicketPageHeader_button {
    &:not(:last-child) {
      margin-right: 14px;
    }
  }

  .tickets_MobileTicketPageHeader_more-button {
    width: 42px;
    height: 42px;
    color: ${(props) => props.theme.colors.white_blue};
    font-size: 24px;
    line-height: 24px;
  }
`
