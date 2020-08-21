import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import BusinessHoursPage from '../pages/BusinessHoursPage'
import { settingsRoutes } from './constants'

const SettingsRoutes = () => {
  return (
    <IntlProvider locale="en">
      <Switch>
        <Route path={settingsRoutes.businesshours} exact>
          <BusinessHoursPage />
        </Route>
      </Switch>
    </IntlProvider>
  )
}

export default SettingsRoutes
