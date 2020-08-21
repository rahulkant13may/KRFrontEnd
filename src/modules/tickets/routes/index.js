import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

// pages
import NotFoundPage from 'modules/core/pages/Page404'
import TicketsPage from '../pages/TicketsPage'
import SingleTicketPage from '../pages/SingleTicketPage'

import { ticketsRoutes } from './constants'

import EN_TRANSLATIONS from '../locale/en.json'

const TicketsRoutes = () => {
  return (
    <IntlProvider messages={EN_TRANSLATIONS} locale="en">
      <Switch>
        <Route path={ticketsRoutes.root} exact>
          <TicketsPage />
        </Route>

        <Route path={ticketsRoutes.single_ticket.route}>
          <SingleTicketPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </IntlProvider>
  )
}

export default TicketsRoutes
