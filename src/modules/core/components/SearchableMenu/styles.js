import styled from 'styled-components'

export const StyledHead = styled.div`
  width: 256px;
  padding: 16px 16px 8px;
  border-bottom: 1px solid #e0e0e0;

  .core_SearchableMenu_title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 11px;
  }

  .core_SearchableMenu_back-button {
    width: 22px;
    height: 22px;
    font-size: 12px;
    line-height: 12px;
    margin-right: 11px;
    padding: 0;
    color: ${(props) => props.theme.colors.dark_grey};
  }

  .core_SearchableMenu_title {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.charcoal};
  }

  .core_SearchableMenu_search-input {
    input {
      height: 32px;
      background-color: ${(props) => props.theme.colors.background};
      padding: 10px 6px;
      box-sizing: border-box;
      font-size: 13px;
      line-height: 19px;

      &::placeholder {
        font-size: 13px;
        line-height: 19px;
        color: ${(props) => props.theme.colors.grey};
      }
    }
  }
`

export const StyledMenu = styled.div`
  padding: 8px 0;
  max-height: 256px;
  overflow-y: auto;

  .core_SearchableMenu_item-avatar {
    width: 24px;
    height: 24px;
  }

  .core_SearchableMenu_item-text {
    font-size: 14px;
    line-height: 21px;
  }
`
