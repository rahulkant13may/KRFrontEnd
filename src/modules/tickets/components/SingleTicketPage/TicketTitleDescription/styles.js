import styled from 'styled-components'
import { mediaQueries } from 'modules/core/utils/mediaQueries'

export const StyledTicketTitleDescription = styled.div`
  padding: 24px 16px 32px;

  @media ${mediaQueries.medium} {
    padding: 32px 24px 28px;
  }

  @media ${mediaQueries.xLarge} {
    padding: 32px;
  }

  .tickets_TitleDescription_title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tickets_TitleDescription_title {
    font-weight: 600;
    font-size: 21px;
    line-height: 31px;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.colors.nero};

    &::first-letter {
      text-transform: capitalize;
    }

    @media ${mediaQueries.medium} {
      margin-bottom: 1px;
    }

    @media ${mediaQueries.xLarge} {
      margin-bottom: 9px;
    }
  }

  .tickets_TitleDescription_date {
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.mild_grey};

    @media ${mediaQueries.medium} {
      font-size: 15px;
      line-height: 22px;
    }

    @media ${mediaQueries.xLarge} {
      font-size: 14px;
      line-height: 21px;
    }
  }

  .tickets_TitleDescription_sub {
    display: flex;
    align-items: baseline;
    margin-bottom: 11px;

    @media ${mediaQueries.xLarge} {
      margin-bottom: 6px;
    }
  }

  .tickets_TitleDescription_customer-name {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    margin-right: 24px;
    color: ${({ theme }) => theme.colors.charcoal};

    @media ${mediaQueries.medium} {
      font-size: 15px;
      line-height: 22px;
    }

    @media ${mediaQueries.xLarge} {
      font-size: 14px;
      line-height: 21px;
    }
  }

  .tickets_TitleDescription_tags {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    @media ${mediaQueries.medium} {
      margin-bottom: 24px;
    }

    @media ${mediaQueries.xLarge} {
      margin-bottom: 28px;
    }
  }

  .tickets_TitleDescription_tag {
    &:not(:last-child) {
      margin-right: 4px;

      @media ${mediaQueries.xLarge} {
        margin-right: 8px;
      }
    }
  }

  .tickets_TitleDescription_text {
    @media ${mediaQueries.xLarge} {
      width: 60%;
    }
  }

  .tickets_TitleDescription_paragraph {
    font-size: 17px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.charcoal};

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    @media ${mediaQueries.medium} {
      font-size: 15px;
      line-height: 20px;
    }

    @media ${mediaQueries.xLarge} {
      font-size: 14px;
      line-height: 21px;
    }
  }
`
