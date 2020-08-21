import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as MuiLink } from '@material-ui/core'

import logo from 'assets/images/main/logo.svg'

import { authRoutes } from 'modules/auth/routes/constants'

import { TextInput, Button } from 'modules/core/components'

import { client } from 'modules/core/utils/httpClient'
import {
  setInLocalStorage,
  localStorageKeys,
} from 'modules/core/utils/localStorage'

import {
  StyledMain,
  StyledRoot,
  StyledLogo,
  StyledTypography,
  StyledLink,
  StyledButton,
  StyledForm,
  StyledDomain,
} from './styles'

const SubdomainLogin = () => {
  const { formatMessage } = useIntl()

  const history = useHistory()

  const validationSchema = Yup.object().shape({
    subdomain: Yup.string()
      .required(
        formatMessage({
          id: 'auth.url.required',
          defaultMessage: 'URL is required',
        })
      )
      .min(
        3,
        formatMessage(
          {
            id: 'auth.validation.min',
            defaultMessage: '{key} must be more than {min} characters',
          },
          {
            key: 'URL',
            min: 3,
          }
        )
      )
      .max(
        20,
        formatMessage(
          {
            id: 'auth.validation.max',
            defaultMessage: '{key} must be more than {max} characters',
          },
          {
            key: 'URL',
            max: 20,
          }
        )
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
      setInLocalStorage(localStorageKeys.SUBDOMAIN, data.subdomain)

      const response = await client.get('/api/subdomain-exists/')

      if (response?.data?.message) {
        history.push(authRoutes.userLogin)
      } else {
        setInLocalStorage(localStorageKeys.SUBDOMAIN, null)

        setError('subdomain', {
          message: formatMessage({
            id: 'auth.subdomain.not.registered',
            defaultMessage: 'URL is not registered',
          }),
        })
      }
    } catch (error) {
      enqueueSnackbar(
        formatMessage({
          id: 'auth.something.went.wrong',
          defaultMessage: 'something went wrong!',
        }),
        { variant: 'error' }
      )
    }
  }

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

        <StyledForm>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextInput
              id="subdomain"
              type="text"
              label={formatMessage({
                id: 'auth.login.helpdesk.url',
                defaultMessage: 'your help desk URL',
              })}
              name="subdomain"
              reference={register}
              inputError={errors.subdomain && errors.subdomain.message}
              IconStart={<FontAwesomeIcon icon={['far', 'globe']} />}
              IconEnd={<StyledDomain>.zaphello.com</StyledDomain>}
            />

            <StyledButton>
              <Button type="submit" isSubmitting={formState.isSubmitting}>
                {formatMessage({
                  id: 'auth.next',
                  defaultMessage: 'next',
                })}
              </Button>
            </StyledButton>
          </form>
        </StyledForm>

        <StyledLink>
          <MuiLink
            component={Link}
            to={authRoutes.signup}
            className="auth_message_link"
          >
            {formatMessage({
              id: 'auth.forgot.subdomain',
              defaultMessage: 'Don’t remember your Help Desk Url?',
            })}
          </MuiLink>
        </StyledLink>

        <StyledLink>
          {formatMessage({
            id: 'auth.join.msg',
            defaultMessage: 'Want to create a new Help Desk Url?',
          })}{' '}
          <MuiLink
            component={Link}
            to={authRoutes.signup}
            className="auth_message_link"
          >
            {formatMessage({
              id: 'auth.login.link',
              defaultMessage: 'Join ZapHello',
            })}
          </MuiLink>
        </StyledLink>
      </StyledRoot>
    </StyledMain>
  )
}

export default SubdomainLogin
