import React, { FC } from 'react'
import AuthLayout from '../../layouts/authentication'
import PageLogin from '../../components/containers/PageLogin'

type LoginPageProps = {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <AuthLayout>
      <PageLogin />
    </AuthLayout>
  )
}

export default LoginPage
