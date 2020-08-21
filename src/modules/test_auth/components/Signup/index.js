import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from 'assets/images/main/logo.svg'

import { authRoutes } from 'modules/auth/routes/constants'
import { setFormData } from 'modules/auth/store'

import { TextInput, Button } from 'modules/core/components'

import {
  StyledMain,
  StyledRoot,
  StyledLogo,
  StyledTypography,
  StyledWrap,
  StyledFname,
  StyledLname,
  StyledForm,
} from './styles'

const SignUpForm = () => {
  const { formatMessage } = useIntl()

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .required(
        formatMessage(
          {
            id: 'auth.validation.required',
            defaultMessage: '{key} is required',
          },
          { key: 'First name' }
        )
      )
      .min(
        3,
        formatMessage(
          {
            id: 'auth.validation.min',
            defaultMessage: '{key} must be more than {min} characters',
          },
          {
            key: 'First name',
            min: 3,
          }
        )
      ),
    last_name: Yup.string()
      .required(
        formatMessage(
          {
            id: 'auth.validation.required',
            defaultMessage: '{key} is required',
          },
          { key: 'Last name' }
        )
      )
      .min(
        3,
        formatMessage(
          {
            id: 'auth.validation.min',
            defaultMessage: '{key} must be more than {min} characters',
          },
          {
            key: 'Last name',
            min: 3,
          }
        )
      ),
    email: Yup.string()
      .required(
        formatMessage(
          {
            id: 'auth.validation.required',
            defaultMessage: '{key} is required',
          },
          { key: 'Email' }
        )
      )
      .email(
        formatMessage({
          id: 'auth.signup.email.validation1',
          defaultMessage: 'Please enter a valid email address',
        })
      ),
    phone: Yup.string()
      .required(
        formatMessage(
          {
            id: 'auth.validation.required',
            defaultMessage: '{key} is required',
          },
          { key: 'Phone' }
        )
      )
      .matches(
        /^\d{10,12}$/,
        formatMessage({
          id: 'auth.signup.phone.validation1',
          defaultMessage: 'Please enter a valid phone number.',
        })
      ),
  })

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = (signupData) => {
    dispatch(setFormData(signupData))
    history.push(authRoutes.signupNext)
  }

  return (
    <StyledMain>
      <StyledRoot>
        <StyledLogo>
          <Link to={authRoutes.signup}>
            <img src={logo} alt="" width="60px" height="60px" />
          </Link>
        </StyledLogo>

        <StyledTypography>
          {formatMessage({
            id: 'auth.signup.title',
            defaultMessage: 'Get your free trial account now',
          })}
        </StyledTypography>

        <StyledForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledWrap>
              <StyledFname>
                <TextInput
                  id="first_name"
                  type="text"
                  label={formatMessage({
                    id: 'auth.signup.firstName',
                    defaultMessage: 'First Name',
                  })}
                  name="first_name"
                  reference={register}
                  IconStart={<FontAwesomeIcon icon={['fal', 'user']} />}
                  inputError={errors.first_name && errors.first_name.message}
                />
              </StyledFname>

              <StyledLname>
                <TextInput
                  id="last_name"
                  type="text"
                  label={formatMessage({
                    id: 'auth.signup.lastName',
                    defaultMessage: 'Last Name',
                  })}
                  name="last_name"
                  reference={register}
                  inputError={errors.last_name && errors.last_name.message}
                />
              </StyledLname>
            </StyledWrap>

            <TextInput
              id="email"
              type="email"
              label={formatMessage({
                id: 'auth.signup.email',
                defaultMessage: 'Email',
              })}
              name="email"
              reference={register}
              inputError={errors.email && errors.email.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'envelope']} />}
            />

            <TextInput
              id="phone"
              type="text"
              label={formatMessage({
                id: 'auth.signup.phone',
                defaultMessage: 'Phone Number',
              })}
              reference={register}
              name="phone"
              inputError={errors.phone && errors.phone.message}
              IconStart={
                <FontAwesomeIcon icon={['fal', 'mobile-android-alt']} />
              }
            />

            <Button type="submit">
              {formatMessage({
                id: 'Create Account',
                defaultMessage: 'Create Account',
              })}
            </Button>
          </form>
        </StyledForm>
      </StyledRoot>
    </StyledMain>
  )
}

export default SignUpForm
