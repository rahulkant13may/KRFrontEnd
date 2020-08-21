import styled from 'styled-components'
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledArticlesBox = styled.div`
  padding: 20px 17px;
  background-color: ${({ theme }) => theme.colors.white_smoke};

  .tickets_ArticlesBox_title {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    margin: 0;
    margin-bottom: 14px;
    color: ${({ theme }) => theme.colors.charcoal};

    @media ${mediaQueries.xLarge} {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }

  .tickets_ArticlesBox_articles {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }

  .tickets_ArticlesBox_article {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 6px;

      @media ${mediaQueries.xLarge} {
        margin-bottom: 8px;
      }
    }

    &::before {
      display: inline-block;
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.blue_black};
      margin-right: 10px;
    }
  }

  .tickets_ArticlesBox_article-link {
    color: ${({ theme }) => theme.colors.blue_black};
    font-size: 15px;
    line-height: 18px;

    @media ${mediaQueries.xLarge} {
      font-size: 14px;
    }
  }
`
