import React from 'react'
import { Switch, Route } from 'react-router-dom'

// routes
import AuthRoutes from 'modules/auth/routes/AuthRoutes'
import AppRoutes from './AppRoutes'

// pages
import ServerErrorPage from '../pages/Page500'
import NotFoundPage from '../pages/Page404'

// components
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import { useSiteSettings } from '../hooks/useSiteSettings'

import { coreRoutes } from './constants'

const RootRoutes = () => {
  useSiteSettings()

  return (
    <Switch>
      <PublicRoute path={coreRoutes.auth}>
        <AuthRoutes />
      </PublicRoute>

      <PrivateRoute path={coreRoutes.app}>
        <AppRoutes />
      </PrivateRoute>

      <Route path={coreRoutes.serverError}>
        <ServerErrorPage />
      </Route>

      <Route path={coreRoutes.notFound}>
        <NotFoundPage />
      </Route>

      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  )
}

export default RootRoutes
