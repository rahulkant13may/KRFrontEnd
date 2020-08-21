import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NotFoundPage from 'modules/core/pages/Page404'
import ProfilePage from '../pages/ProfilePage'

import { userRoutes } from './constants'

const UserRoutes = () => {
  return (
    <Switch>
      <Route path={userRoutes.profile}>
        <ProfilePage />
      </Route>

      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  )
}

export default UserRoutes
