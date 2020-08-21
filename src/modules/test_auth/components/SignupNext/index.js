import React, { useState, useLayoutEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers'

import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from 'assets/images/main/logo.svg'

import { authRoutes } from 'modules/auth/routes/constants'
import { ticketsRoutes } from 'modules/tickets/routes/constants'

import { TextInput, Button, Link as LinkButton } from 'modules/core/components'

import { apiSignup } from 'modules/auth/store/operations'

import {
  setInLocalStorage,
  localStorageKeys,
} from 'modules/core/utils/localStorage'

import ErrorAlert from 'modules/core/components/ErrorAlert'

import {
  StyledMain,
  StyledRoot,
  StyledLogo,
  StyledTypography,
  StyledWrapper,
  StyledIcon,
  StyledButton,
  StyledForm,
  StyledDomain,
  StyledAgree,
  StyledCardTemplate,
  StyledCardWrap,
  StyledCvvText,
  StyledDateText,
  StyledZipText,
  StyledCardText,
  StyledFreeTrialWrap,
  StyledTextWrap,
  StyledBoxWrap,
  StyledFeature,
  StyledFreeTrial,
  StyledWrapCardDetail,
  StyledValidationWrapper,
  StyledValidation,
} from './styles'

const mask = (userInput) => {
  const numbers = userInput.match(/\d/g)
  const numberLength = (numbers && numbers.join('').length) || 0
  return numberLength > 0 ? [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/] : []
}

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={mask}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
}

const SignupNext = () => {
  const [isTermsAgreed, setAgreed] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)

  const { formatMessage } = useIntl()

  const history = useHistory()

  const { initialFormData, apiErrors, showCreditCardInput } = useSelector(
    ({ auth, siteSettings }) => ({
      initialFormData: auth.formData,
      apiErrors: auth.errors,
      showCreditCardInput: siteSettings.require_credit_card_on_sign_up,
    })
  )

  useLayoutEffect(() => {
    if (!initialFormData) {
      history.replace(authRoutes.signup)
    }
  }, [history, initialFormData])

  const cardValidationSchema = {
    card: Yup.string()
      .required(
        formatMessage({
          id: 'auth.signup2.card.validation1',
          defaultMessage: 'Enter your card number',
        })
      )
      .matches(
        /^\d{16}$/,
        formatMessage({
          id: 'auth.signup2.card.validation2',
          defaultMessage: 'Enter a valid card number',
        })
      ),

    date: Yup.string()
      .required(
        formatMessage({
          id: 'auth.signup2.date.validation',
          defaultMessage: 'Enter a valid expiration date',
        })
      )
      .matches(
        /^[0-1][0-9]\/[0-9][0-9]$/,
        formatMessage({
          id: 'auth.signup2.date.validation',
          defaultMessage: 'Enter a valid expiration date',
        })
      ),

    cvc: Yup.string()
      .required(
        formatMessage({
          id: 'auth.signup2.cvc.validation1',
          defaultMessage: 'Enter your CVC',
        })
      )
      .matches(
        /^\d{3}$/,
        formatMessage({
          id: 'auth.signup2.cvc.validation2',
          defaultMessage: 'Verify your CVC',
        })
      ),

    zipcode: Yup.string()
      .required(
        formatMessage({
          id: 'auth.signup2.zipcode.validation1',
          defaultMessage: 'Enter your zip-code',
        })
      )
      .matches(
        /^\d{5,6}$/,
        formatMessage({
          id: 'auth.signup2.zipcode.validation2',
          defaultMessage: 'Enter a valid zip code',
        })
      ),
  }

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

    company_name: Yup.string(),
    password1: Yup.string()
      .required(
        formatMessage({
          id: 'auth.signup2.password.validation1',
          defaultMessage: 'Password is required',
        })
      )
      .min(
        8,
        formatMessage({
          id: 'auth.login.password.validation1',
          defaultMessage: 'Password must contain at least 8 characters',
        })
      )
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        formatMessage({
          id: 'auth.login.password.validation3',
          defaultMessage:
            'Password must contain at least 1 letter, 1 number, and 1 special character',
        })
      ),

    password2: Yup.string().oneOf(
      [Yup.ref('password1'), null],
      formatMessage({
        id: 'auth.signup2.cpassword.validation2',
        defaultMessage: 'Confirm password should match with password',
      })
    ),
    ...(showCreditCardInput ? cardValidationSchema : {}),
  })

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const dispatch = useDispatch()

  const onSubmit = async ({ subdomain, ...formData }) => {
    setInLocalStorage(localStorageKeys.SUBDOMAIN, subdomain)

    const signupData = {
      ...formData,
      ...(initialFormData || {}),
      plan: 1,
    }

    try {
      await dispatch(apiSignup(signupData))
      history.push(ticketsRoutes.root)
    } catch (error) {
      setInLocalStorage(localStorageKeys.SUBDOMAIN, null)
    }
  }

  return (
    <StyledMain>
      <StyledRoot>
        <StyledLogo>
          <Link to={authRoutes.signupNext}>
            <img src={logo} alt="" width="100%" height="100%" />
          </Link>
        </StyledLogo>

        <StyledTypography>
          {formatMessage({
            id: 'auth.signup.title',
            defaultMessage: 'Get your free trial account now ',
          })}
        </StyledTypography>

        {apiErrors.map((errorMsg) => (
          <div className="auth_Signup_global-error" key={errorMsg}>
            <ErrorAlert errorMessage={errorMsg} />
          </div>
        ))}

        <StyledForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              id="subdomain"
              type="text"
              label={formatMessage({
                id: 'auth.signup2.deskURL',
                defaultMessage: 'Choose Your Help Desk URL',
              })}
              name="subdomain"
              reference={register}
              inputError={errors.subdomain && errors.subdomain.message}
              IconStart={<FontAwesomeIcon icon={['far', 'globe']} />}
              IconEnd={<StyledDomain>.zaphello.com</StyledDomain>}
            />

            <TextInput
              id="company_name"
              type="text"
              label={formatMessage({
                id: 'auth.signup2.companyName',
                defaultMessage: 'Company Name',
              })}
              name="company_name"
              IconStart={<FontAwesomeIcon icon={['far', 'building']} />}
              reference={register}
              IconEnd={
                <StyledIcon>
                  (
                  {formatMessage({
                    id: 'auth.signup2.optionalField',
                    defaultMessage: 'optional',
                  })}
                  )
                </StyledIcon>
              }
            />

            <TextInput
              id="password1"
              type={passwordShown ? 'text' : 'password'}
              label={formatMessage({
                id: 'auth.signup2.password',
                defaultMessage: 'Choose a Password',
              })}
              name="password1"
              reference={register}
              inputError={errors.password1 && errors.password1.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'key']} />}
              IconEnd={
                <StyledIcon>
                  <FontAwesomeIcon
                    onClick={() => setPasswordShown(!passwordShown)}
                    icon={['far', passwordShown ? 'eye' : 'eye-slash']}
                  />
                </StyledIcon>
              }
            />

            <TextInput
              id="password2"
              type={confirmPasswordShown ? 'text' : 'password'}
              label={formatMessage({
                id: 'auth.signup2.confirmPassword',
                defaultMessage: 'Confirm Password',
              })}
              name="password2"
              reference={register}
              inputError={errors.password2 && errors.password2.message}
              IconStart={<FontAwesomeIcon icon={['fal', 'key']} />}
              IconEnd={
                <StyledIcon>
                  <FontAwesomeIcon
                    onClick={() =>
                      setConfirmPasswordShown(!confirmPasswordShown)
                    }
                    icon={['far', confirmPasswordShown ? 'eye' : 'eye-slash']}
                  />
                </StyledIcon>
              }
            />

            {showCreditCardInput && (
              <div>
                <StyledCardTemplate>
                  <StyledBoxWrap>
                    <StyledFreeTrialWrap>
                      <StyledFreeTrial>
                        Start Your 2-week Free Trial
                      </StyledFreeTrial>
                      <StyledFeature>
                        <FontAwesomeIcon icon={['fas', 'check-circle']} />
                        All Features Included{' '}
                      </StyledFeature>
                    </StyledFreeTrialWrap>
                    <StyledTextWrap>
                      <span>You won’t be charged today</span>

                      <span>
                        $29 per agent/month if you don’t cancel in 2 weeks
                      </span>
                    </StyledTextWrap>
                  </StyledBoxWrap>
                  <StyledCardWrap
                    error={
                      errors.card || errors.date || errors.cvc || errors.zipcode
                    }
                  >
                    <StyledCardText error={errors.card}>
                      <TextInput
                        id="card"
                        type="text"
                        label={formatMessage({
                          id: 'auth.signup2.cardno',
                          defaultMessage: 'Card Number',
                        })}
                        isDisplayError={false}
                        inputError={errors.card && errors.card.message}
                        name="card"
                        reference={register}
                        IconStart={
                          <FontAwesomeIcon
                            icon={['fas', 'credit-card-front']}
                          />
                        }
                      />
                    </StyledCardText>
                    <StyledWrapCardDetail>
                      <StyledDateText error={errors.date}>
                        <TextInput
                          id="date"
                          type="text"
                          label={formatMessage({
                            id: 'auth.signup2.date',
                            defaultMessage: 'MM/YY',
                          })}
                          isDisplayError={false}
                          inputError={errors.date && errors.date.message}
                          name="date"
                          reference={register}
                          InputProps={{ inputComponent: TextMaskCustom }}
                        />
                      </StyledDateText>
                      <StyledCvvText error={errors.cvc}>
                        <TextInput
                          id="cvc"
                          type="text"
                          label={formatMessage({
                            id: 'auth.signup2.cvc',
                            defaultMessage: 'CVC',
                          })}
                          isDisplayError={false}
                          inputError={errors.cvc && errors.cvc.message}
                          name="cvc"
                          reference={register}
                        />
                      </StyledCvvText>
                      <StyledZipText error={errors.zipcode}>
                        <TextInput
                          id="zipcode"
                          type="text"
                          label={formatMessage({
                            id: 'auth.signup2.zipcode',
                            defaultMessage: 'Zip Code',
                          })}
                          isDisplayError={false}
                          inputError={errors.zipcode && errors.zipcode.message}
                          name="zipcode"
                          reference={register}
                        />
                      </StyledZipText>
                    </StyledWrapCardDetail>
                  </StyledCardWrap>

                  <StyledValidationWrapper>
                    <StyledValidation>
                      {errors.card && errors.card.message}
                    </StyledValidation>
                    <StyledValidation>
                      {errors.date && errors.date.message}
                    </StyledValidation>
                    <StyledValidation>
                      {errors.cvc && errors.cvc.message}
                    </StyledValidation>
                    <StyledValidation>
                      {errors.zipcode && errors.zipcode.message}
                    </StyledValidation>
                  </StyledValidationWrapper>
                </StyledCardTemplate>
              </div>
            )}

            <StyledWrapper>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={isTermsAgreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                      />
                    }
                  />
                </FormGroup>
              </FormControl>

              <StyledAgree>
                {formatMessage({
                  id: 'auth.signup2.agree',
                  defaultMessage: 'I agree to the',
                })}
              </StyledAgree>

              <LinkButton href="https://www.facebook.com/zaphello.phello">
                {formatMessage({
                  id: 'auth.signup2.term',
                  defaultMessage: 'Terms and Conditions',
                })}
              </LinkButton>
            </StyledWrapper>

            <StyledButton>
              <Button type="submit" disabled={!isTermsAgreed}>
                {formatMessage({
                  id: 'auth.signup.signup',
                  defaultMessage: 'Create Account',
                })}
              </Button>
            </StyledButton>
          </form>
        </StyledForm>
      </StyledRoot>
    </StyledMain>
  )
}

export default SignupNext
