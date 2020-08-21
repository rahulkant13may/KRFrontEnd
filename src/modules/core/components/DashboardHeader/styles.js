import styled from 'styled-components'

export const StyledDashboardHeader = styled.div`
  width: 100%;
  height: ${(props) => (props.$large ? '92px' : '78px')};
  padding: 32px 0px 23px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`
