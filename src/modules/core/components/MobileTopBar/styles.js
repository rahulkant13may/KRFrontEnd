import styled from 'styled-components'

export const StyledMobileTopBar = styled.div`
  width: 100%;
  min-height: 100vh;

  .core_MobileTopBar_head {
    width: 100%;
    height: ${(props) => `${props.$height}px`};
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
    padding: 26px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
  }

  .core_MobileTopBar_leftButton {
    position: absolute;
    top: 50%;
    left: 12px;
    right: auto;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    line-height: 20px;
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .core_MobileTopBar_title {
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
    letter-spacing: 0.02em;
  }

  .core_MobileTopBar_rightElement {
    position: absolute;
    top: 50%;
    left: auto;
    right: 12px;
    transform: translateY(-50%);

    & > * {
      color: ${(props) => props.theme.colors.white};
    }
  }

  .core_MobileTopBar_content {
    background-color: ${(props) => props.theme.colors.white};
  }
`
