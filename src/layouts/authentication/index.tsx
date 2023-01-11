import React, { FC } from 'react'
import Helper from '../../components/common/Helper'
import { Helmet } from 'react-helmet'
import { whiteColor } from '../../styles/variables'

type LayoutProps = {
  children: React.ReactNode
}

const AuthLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <style>{`body { background-color: ${whiteColor}}`}</style>
      </Helmet>
      <Helper auth={true} theme="light">
        {children}
      </Helper>
    </>
  )
}

export default AuthLayout
