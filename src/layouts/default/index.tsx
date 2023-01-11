import React, { FC } from 'react'
import Helper from '../../components/common/Helper'
import { Helmet } from 'react-helmet'
import { defaultLayoutBGcolor } from '../../styles/variables'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <style>{`body { background-color: ${defaultLayoutBGcolor}}`}</style>
      </Helmet>
      <Helper theme="light">{children}</Helper>
    </>
  )
}

export default Layout
