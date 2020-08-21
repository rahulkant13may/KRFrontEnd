import React from 'react'

import { useMediaQuery } from '@material-ui/core'

import TicketPageHeader from 'modules/tickets/components/SingleTicketPage/TicketPageHeader'
import TicketTitleDescription from 'modules/tickets/components/SingleTicketPage/TicketTitleDescription'
import ArticlesBox from 'modules/tickets/components/SingleTicketPage/ArticlesBox'

import { StyledSingleTicketPage } from './styles'

const SingleTicketPage = () => {
  const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return (
    <StyledSingleTicketPage>
      <TicketPageHeader>
        <div className="tickets_SingleTicketPage_content">
          <main className="tickets_SingleTicketPage_main">
            <TicketTitleDescription
              title="how to track my order?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquam, quidem commodi tenetur deserunt, consequatur delectus neque ab minima officiis."
              customerName="john smith"
              date="2020-08-14T07:32:42.306Z"
              tags={[
                {
                  id: 1,
                  name: 'refund',
                },
              ]}
            />

            <div className="tickets_SingleTicketPage_articles-box">
              <ArticlesBox
                articles={[
                  {
                    name: 'When is my order going to arrive?',
                    url: 'https://google.com',
                  },
                  {
                    name: 'Can I pickup my order at the store?',
                    url: 'https://bing.com',
                  },
                ]}
              />
            </div>
          </main>

          {!isMobileScreen && (
            <div className="tickets_SingleTicketPage_side">
              <div
                style={{
                  backgroundColor: '#fafafa',
                  width: '256px',
                  minHeight: '100vh',
                }}
              >
                <div>customer info</div>
              </div>
            </div>
          )}
        </div>
      </TicketPageHeader>
    </StyledSingleTicketPage>
  )
}

export default SingleTicketPage
