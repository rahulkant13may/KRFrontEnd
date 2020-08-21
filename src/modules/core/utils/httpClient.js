import axios from 'axios'

import { authRoutes } from 'modules/auth/routes/constants'
import { coreRoutes } from '../routes/constants'

import history from './history'

import {
  getFromLocalStorage,
  localStorageKeys,
  setInLocalStorage,
} from './localStorage'

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

client.interceptors.request.use(
  (request) => {
    const subdomain = getFromLocalStorage(localStorageKeys.SUBDOMAIN)
    const authToken = getFromLocalStorage(localStorageKeys.AUTH_TOKEN)

    if (subdomain) {
      request.baseURL = `https://${subdomain}.zaphelllo.net`
    } else {
      request.baseURL = 'https://zaphelllo.net'
    }

    if (authToken) {
      request.headers.Authorization = `Token ${authToken}`
    }

    return request
  },
  (error) => Promise.reject(error)
)

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      setInLocalStorage(localStorageKeys.AUTH_TOKEN, null)
      setInLocalStorage(localStorageKeys.SUBDOMAIN, null)
      history.replace(authRoutes.subdomainLogin)
    }

    if (error?.response?.status === 404) {
      history.replace(coreRoutes.notFound)
    }

    if (error?.response?.status === 500) {
      history.replace(coreRoutes.serverError)
    }

    return Promise.reject(error)
  }
)

export { client }
