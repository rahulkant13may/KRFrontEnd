import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { authRoutes } from 'modules/auth/routes/constants'

import { useUserDate } from '../hooks/useUserData'

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useUserDate()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: authRoutes.subdomainLogin,
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivateRoute
