import styled from 'styled-components'
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledSingleTicketPage = styled.div`
  .tickets_SingleTicketPage_content {
    display: flex;
    align-items: stretch;
  }

  .tickets_SingleTicketPage_main {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .tickets_SingleTicketPage_side {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .tickets_SingleTicketPage_articles-box {
    padding: 0 16px;
    margin-bottom: 117px;

    @media ${mediaQueries.medium} {
      padding: 0 24px;
      margin-bottom: 33px;
    }

    @media ${mediaQueries.xLarge} {
      padding: 0 32px;
      width: 512px;
      margin-bottom: 24px;
    }
  }
`
