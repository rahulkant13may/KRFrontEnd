import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  Typography,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from 'assets/images/main/logo.svg'

import { authRoutes } from 'modules/auth/routes/constants'
import { ticketsRoutes } from 'modules/tickets/routes/constants'

import { TextInput, Button, Link as LinkButton } from 'modules/core/components'
import ErrorAlert from 'modules/core/components/ErrorAlert'

import { errorHandler } from 'modules/core/utils/formAsyncErrorHandler'

import {
  getFromLocalStorage,
  localStorageKeys,
} from 'modules/core/utils/localStorage'

import {
  StyledMain,
  StyledRoot,
  StyledLogo,
  StyledLabel,
  StyledTypography,
  StyledWrapper,
  StyledLink,
  StyledButton,
  StyledForm,
  StyleIconWrap,
} from './styles'

const LoginForm = (props) => {
  const { submitHandler } = props

  const { formatMessage } = useIntl()

  const history = useHistory()
  const location = useLocation()

  const apiAsyncErrors = useSelector((state) => state.auth.errors)

  const [passwordShown, setPasswordShown] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(
        formatMessage({
          id: 'auth.login.email.validation2',
          defaultMessage: 'Email is required',
        })
      )
      .email(
        formatMessage({
          id: 'auth.login.email.validation1',
          defaultMessage: 'Enter a valid email',
        })
      ),
    password: Yup.string()
      .required(
        formatMessage({
          id: 'auth.login.password.validation2',
          defaultMessage: 'Enter your password',
        })
      )
      .min(
        8,
        formatMessage({
          id: 'auth.login.password.validation1',
          defaultMessage: 'Password must contain at least 8 characters',
        })
      ),
  })

  const { register, handleSubmit, errors, setError, formState } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = async (data) => {
    try {
      await submitHandler(data, rememberMe)

      if (location.state?.from) {
        history.replace(location.state?.from)
      } else {
        history.replace(ticketsRoutes.root)
      }
    } catch (error) {
      if (error.response) {
        const fieldsKeys = ['email', 'password']
        const fieldErrors = error.response.data
        errorHandler(fieldErrors, fieldsKeys, setError)
      } else {
        enqueueSnackbar(
          formatMessage({
            id: 'auth.something.went.wrong',
            defaultMessage: 'something went wrong!',
          }),
          { variant: 'error' }
        )
      }
    }
  }

  const subdomain = getFromLocalStorage(localStorageKeys.SUBDOMAIN)

  return (
    <StyledMain>
      <StyledRoot>
        <StyledLogo>
          <Link to={authRoutes.subdomainLogin}>
            <img src={logo} alt="" width="100%" height="100%" />
          </Link>
        </StyledLogo>

        <StyledTypography>
          {formatMessage({
            id: 'auth.login.title',
            defaultMessage: 'Log in to your help desk',
          })}
        </StyledTypography>

        <Typography className="auth_LoginForm_url">{`${subdomain}.zaphello.com`}</Typography>

        {apiAsyncErrors.map((errorMsg) => (
          <div className="auth_LoginForm_global-error" key={errorMsg}>
            <ErrorAlert errorMessage={errorMsg} />
          </div>
        ))}

        <StyledForm>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextInput
              id="email"
              type="email"
              label={formatMessage({
                id: 'auth.login.email',
                defaultMessage: 'Email Address',
              })}
              name="email"
              reference={register}
              inputError={errors.email && errors.email.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'envelope']} />}
            />

            <TextInput
              id="password"
              type={passwordShown ? 'text' : 'password'}
              label={formatMessage({
                id: 'auth.login.password',
                defaultMessage: 'Password',
              })}
              name="password"
              reference={register}
              inputError={errors.password && errors.password.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'key']} />}
              IconEnd={
                <StyleIconWrap>
                  <FontAwesomeIcon
                    onClick={() => setPasswordShown(!passwordShown)}
                    icon={['far', passwordShown ? 'eye' : 'eye-slash']}
                  />
                </StyleIconWrap>
              }
            />

            <StyledWrapper>
              <FormControl
                component="fieldset"
                onChange={(e) => setRememberMe(e.target.checked)}
              >
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value={formatMessage({
                      id: 'auth.login.rememberMe',
                      defaultMessage: 'Remember Me',
                    })}
                    control={<Checkbox color="primary" />}
                    label={formatMessage({
                      id: 'auth.login.rememberMe',
                      defaultMessage: 'Remember Me',
                    })}
                  />
                </FormGroup>
              </FormControl>

              <StyledLabel>
                <LinkButton onClick={() => {}} isButton>
                  {formatMessage({
                    id: 'auth.login.forgotPassword',
                    defaultMessage: 'Forgot Your Password?',
                  })}
                </LinkButton>
              </StyledLabel>
            </StyledWrapper>

            <StyledButton>
              <Button type="submit" isSubmitting={formState.isSubmitting}>
                {formatMessage({
                  id: 'auth.login.login',
                  defaultMessage: 'Login',
                })}
              </Button>
            </StyledButton>
          </form>
        </StyledForm>

        <StyledLink>
          {formatMessage({
            id: 'auth.login.account',
            defaultMessage: 'Don’t have an account yet?',
          })}
          <LinkButton href="https://www.facebook.com/zaphello.phello">
            Join ZapHello
          </LinkButton>
        </StyledLink>
      </StyledRoot>
    </StyledMain>
  )
}

LoginForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
}

export default LoginForm
