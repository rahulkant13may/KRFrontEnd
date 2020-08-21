import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import LoginForm from 'modules/auth/components/Login'

import { apiLogin } from 'modules/auth/store/operations'

import { authRoutes } from 'modules/auth/routes/constants'

import {
  getFromLocalStorage,
  localStorageKeys,
} from 'modules/core/utils/localStorage'

const LoginPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useLayoutEffect(() => {
    const storedSubdomain = getFromLocalStorage(localStorageKeys.SUBDOMAIN)

    if (!storedSubdomain) {
      history.replace(authRoutes.subdomainLogin)
    }
  }, [history])

  const submitHandler = async (loginData) => {
    const { email, password } = loginData

    await dispatch(apiLogin({ email, password }))
  }

  return <LoginForm submitHandler={submitHandler} />
}

export default LoginPage
