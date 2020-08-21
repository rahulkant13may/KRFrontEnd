import styled from 'styled-components'

import { Box, IconButton } from '@material-ui/core'

export const StyledWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;

  .core_RoundedPagination_MuiPagination-root {
    height: 32px;

    ul {
      li {
        button {
          font-size: 14px;
          color: ${(props) => props.theme.colors.nero};
        }
      }

      .MuiPaginationItem-page:hover {
        background-color: ${(props) => props.theme.colors.chineseDimWhite};
        border-radius: 3px;
      }

      .MuiPaginationItem-page.Mui-selected {
        background-color: ${(props) => props.theme.colors.chineseDimWhite};
        border-radius: 3px;
      }
    }
  }
`

export const StyledIconButton = styled(IconButton)`
  width: 32px;
  height: 32px;
  font-size: 13px;
  color: ${(props) => props.theme.colors.nero};
  line-height: 14px;

  &:first-child {
    margin-right: 16px;
  }

  &:last-child {
    margin-left: 16px;
  }
`
