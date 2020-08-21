import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

// pages
import AgentsPage from '../pages/AgentsPage'

import { agentsRoutes } from './constants'

import EN_TRANSLATIONS from '../locale/en.json'

const AgentsRoutes = () => {
  return (
    <IntlProvider messages={EN_TRANSLATIONS} locale="en">
      <Switch>
        <Route path={agentsRoutes.root} exact>
          <AgentsPage />
        </Route>
      </Switch>
    </IntlProvider>
  )
}

export default AgentsRoutes
