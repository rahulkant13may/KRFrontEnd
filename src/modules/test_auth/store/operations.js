import { client } from 'modules/core/utils/httpClient'

import { startAuth, successAuth, failAuth, logout } from 'modules/auth/store'
import { clearUser } from 'modules/user/store'

import {
  setInLocalStorage,
  localStorageKeys,
} from 'modules/core/utils/localStorage'

export const apiLogin = (loginData) => async (dispatch) => {
  dispatch(startAuth())

  try {
    const response = await client.post('/rest-auth/login/', loginData)

    if (response.data?.key) {
      setInLocalStorage(localStorageKeys.AUTH_TOKEN, response.data.key)
    }

    dispatch(successAuth())
  } catch (error) {
    const nonFieldErrors = error?.response?.data?.non_field_errors

    if (nonFieldErrors) {
      dispatch(failAuth(nonFieldErrors))
    } else {
      dispatch(failAuth(['Something went wrong!']))
    }

    throw error
  }
}

export const apiSignup = (signupData) => async (dispatch) => {
  dispatch(startAuth())

  try {
    const response = await client.post('/api/first-register/', signupData)

    if (response.data?.key) {
      setInLocalStorage(localStorageKeys.AUTH_TOKEN, response.data.key)
    }

    dispatch(successAuth())
  } catch (error) {
    const nonFieldErrors = error?.response?.data?.non_field_errors

    if (nonFieldErrors) {
      dispatch(failAuth(nonFieldErrors))
    }

    if (Array.isArray(error?.response?.data)) {
      dispatch(failAuth(error.response.data))
    }

    throw error
  }
}

export const signOut = () => async (dispatch) => {
  setInLocalStorage(localStorageKeys.AUTH_TOKEN, null)
  setInLocalStorage(localStorageKeys.SUBDOMAIN, null)

  dispatch(logout())
  dispatch(clearUser())
}
