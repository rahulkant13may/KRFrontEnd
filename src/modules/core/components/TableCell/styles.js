import styled from 'styled-components'

export const StyledTableCell = styled.div`
  width: ${(props) => (props.$width ? `${props.$width}px` : '')};
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark_mild_grey};
`
