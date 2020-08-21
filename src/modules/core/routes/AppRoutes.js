import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { userRoutes } from 'modules/user/routes/constants'
import { ticketsRoutes } from 'modules/tickets/routes/constants'
import { agentsRoutes } from 'modules/agents/routes/constants'
import { settingsRoutes } from 'modules/settings/routes/constants'

// Routes
import TicketsRoutes from 'modules/tickets/routes'
import UserRoutes from 'modules/user/routes/UserRoutes'
import AgentsRoutes from 'modules/agents/routes'
import SettingsRoutes from 'modules/settings/routes'


import LoadingScreen from '../components/LoadingScreen'
import ToolbarLayout from '../components/ToolbarLayout'

const AppRoutes = () => {
  const { loading: loadingUserData } = useSelector(({ user }) => user)

  if (loadingUserData) {
    return <LoadingScreen />
  }

  return (
    <ToolbarLayout>
      <Switch>
        <Route path={ticketsRoutes.root}>
          <TicketsRoutes />
        </Route>

        <Route path={userRoutes.root}>
          <UserRoutes />
        </Route>

        <Route path={agentsRoutes.root}>
          <AgentsRoutes />
        </Route>

        <Route path={settingsRoutes.root}>
          <SettingsRoutes />
        </Route>
      </Switch>
    </ToolbarLayout>
  )
}

export default AppRoutes
