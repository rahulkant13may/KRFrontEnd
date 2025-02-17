import { createMuiTheme } from '@material-ui/core'

import { colors } from './colors'

export const muiTheme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    background: { main: colors.background },
    grey: { main: colors.light_grey },
    error: { main: colors.error },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 960,
      xl: 1280,
    },
  },
})
