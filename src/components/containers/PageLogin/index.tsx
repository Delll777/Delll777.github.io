import React, { FC } from 'react'
import AuthContainer from '../../common/AuthContainer'
import {
  heading,
  subheading,
  emailInputLabel,
  passwordInpputLabel,
  registerButtonLabel,
  loginButtonLabel,
} from '../../../data/login'
import { Formik, Field, Form } from 'formik'
import AuthInput from '../../ui/AuthInput'
import Button from '../../ui/Button'
import {
  requestUserAuthKey,
  requestUserData,
  requestUserLeagues,
} from '../../../api/login'
import { useDispatch } from 'react-redux'
import { setAuthKey, setUserData, setUserLeagues } from '../../../store/actions'
import { useHistory } from 'react-router-dom'
import routes from '../../../routing/routes'

import styles from './style.module.scss'

type PageLoginProps = {}

type loginFormValuesType = {
  email: string
  password: string
}

const loginFormInitialValues: loginFormValuesType = {
  email: '',
  password: '',
}

const PageLogin: FC<PageLoginProps> = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async (values: loginFormValuesType, actions: any) => {
    const userAuthKey = await requestUserAuthKey(values.email, values.password)
    const userData = await requestUserData(userAuthKey)
    const userLeagues = await requestUserLeagues(userAuthKey)
    dispatch(setAuthKey(userAuthKey))
    dispatch(setUserData(userData))
    dispatch(setUserLeagues(userLeagues))
    history.push(routes.mainMenu)
  }

  const blockName = 'page-login'

  return (
    <AuthContainer
      heading={heading}
      subHeading={subheading}
      className={styles[`${blockName}`]}
    >
      <Formik initialValues={loginFormInitialValues} onSubmit={onSubmit}>
        <Form className={styles[`${blockName}__form`]}>
          <div className={styles[`${blockName}__fields`]}>
            <Field name="email">
              {({ field, form: { touched, errors }, meta }) => (
                <AuthInput
                  field={field}
                  label={emailInputLabel}
                  inputType="email"
                  className={styles[`${blockName}__field`]}
                />
              )}
            </Field>
            <Field name="password">
              {({ field, form: { touched, errors }, meta }) => (
                <AuthInput
                  field={field}
                  label={passwordInpputLabel}
                  inputType="password"
                  className={styles[`${blockName}__field`]}
                />
              )}
            </Field>
          </div>
          <div className={styles[`${blockName}__buttons`]}>
            <Button type="button" theme="gray" text={registerButtonLabel} />
            <Button type="submit" theme="blue" text={loginButtonLabel} />
          </div>
        </Form>
      </Formik>
    </AuthContainer>
  )
}

export default PageLogin
