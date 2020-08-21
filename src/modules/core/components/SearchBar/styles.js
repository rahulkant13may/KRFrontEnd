import styled from 'styled-components'

export const StyledSearchBar = styled.div`
  width: 100%;
  height: ${(props) => (props.$large ? '60px' : '48px')};
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.$light ? props.theme.colors.white : props.theme.colors.background};
  border-top: ${(props) =>
    props.$withBorder
      ? `1px solid ${props.theme.colors.yet_another_grey}`
      : '0'};
  border-bottom: ${(props) =>
    props.$withBorder
      ? `1px solid ${props.theme.colors.yet_another_grey}`
      : '0'};

  .core_SearchBar_wrapper {
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 0 24px;
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) =>
      props.$isFilled ? props.theme.colors.background : 'transparent'};

    .MuiInput-underline:after,
    .MuiInput-underline:before {
      display: none;
    }
  }

  .core_SearchBar_search-icon {
    margin-right: 10px;
    font-size: 16px;
    line-height: 16px;
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  .core_SearchBar_search--clear-icon {
    font-size: 18px;
    width: 18px;
    height: 18px;
  }

  input {
    border: none;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
      color: ${(props) => props.theme.colors.light_secondary};
      text-transform: capitalize;
    }
  }
`
