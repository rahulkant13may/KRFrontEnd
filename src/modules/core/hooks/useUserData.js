import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { apiGetUserData } from 'modules/user/store/operations'

import { getFromLocalStorage, localStorageKeys } from '../utils/localStorage'

export const useUserDate = () => {
  const dispatch = useDispatch()

  const authToken = getFromLocalStorage(localStorageKeys.AUTH_TOKEN)
  const subdomain = getFromLocalStorage(localStorageKeys.SUBDOMAIN)

  useEffect(() => {
    if (authToken && subdomain) {
      dispatch(apiGetUserData())
    }
  }, [authToken, dispatch, subdomain])

  return {
    isAuthenticated: Boolean(authToken && subdomain),
  }
}
