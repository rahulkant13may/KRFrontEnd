import { configureStore, combineReducers } from '@reduxjs/toolkit'

// reducers
import authReducer from 'modules/auth/store'
import userReducer from 'modules/user/store'
import siteSettingsReducer from './reducer'

export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    user: userReducer,
    siteSettings: siteSettingsReducer,
  }),
})
