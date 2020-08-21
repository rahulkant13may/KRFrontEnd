import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

// pages
import SubdomainLoginPage from 'modules/auth/pages/SubdomainLoginPage'
import LoginPage from 'modules/auth/pages/LoginPage'
import SignupPage from 'modules/auth/pages/SignupPage'
import SignupNextPage from 'modules/auth/pages/SignupNextPage'
import NotFoundPage from 'modules/core/pages/Page404'

import { authRoutes } from 'modules/auth/routes/constants'

import EN_TRANSLATIONS from '../locale/en.json'

const AuthRoutes = () => {
  return (
    <IntlProvider messages={EN_TRANSLATIONS} locale="en">
      <Switch>
        <Route path={authRoutes.subdomainLogin}>
          <SubdomainLoginPage />
        </Route>

        <Route path={authRoutes.userLogin}>
          <LoginPage />
        </Route>

        <Route path={authRoutes.signup}>
          <SignupPage />
        </Route>

        <Route path={authRoutes.signupNext}>
          <SignupNextPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </IntlProvider>
  )
}

export default AuthRoutes
