import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { IntlProvider as CoreTranslationsProvider } from 'react-intl'
import { Router } from 'react-router-dom'
import DateFnsUtils from '@date-io/date-fns'
import { SnackbarProvider } from 'notistack'

import {
  CssBaseline,
  MuiThemeProvider,
  StylesProvider as MuiStylesProvider,
} from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

// translations
import EN_TRANSLATIONS from './locale/en.json'

// Material UI custom theme
import { muiTheme } from './utils/mui-theme'

// root
import AppRoutes from './routes'

// store
import { store } from './store'

// utils
import history from './utils/history'
import { colors } from './utils/colors'
import './utils/icons'

function App() {
  return (
    <ReduxProvider store={store}>
      <CoreTranslationsProvider locale="en" messages={EN_TRANSLATIONS}>
        <ThemeProvider theme={{ colors }}>
          <MuiThemeProvider theme={muiTheme}>
            <MuiStylesProvider injectFirst>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <SnackbarProvider maxSnack={3}>
                  <CssBaseline />

                  <Router history={history}>
                    <AppRoutes />
                  </Router>
                </SnackbarProvider>
              </MuiPickersUtilsProvider>
            </MuiStylesProvider>
          </MuiThemeProvider>
        </ThemeProvider>
      </CoreTranslationsProvider>
    </ReduxProvider>
  )
}

export default App
