import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { ticketsRoutes } from 'modules/tickets/routes/constants'

import { getFromLocalStorage, localStorageKeys } from '../utils/localStorage'

const PublicRoute = ({ children, ...rest }) => {
  const authToken = getFromLocalStorage(localStorageKeys.AUTH_TOKEN)
  const subdomain = getFromLocalStorage(localStorageKeys.SUBDOMAIN)

  const isAuthenticated = Boolean(authToken && subdomain)

  return (
    <Route
      {...rest}
      render={() =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ticketsRoutes.root,
            }}
          />
        )
      }
    />
  )
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PublicRoute
