import React, { FC } from 'react'
import Helper from '../../components/common/Helper'
import { Helmet } from 'react-helmet'
import { darkLayoutColor } from '../../styles/variables'

type DarkLayoutProps = {
  children: React.ReactNode
}

const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <style>{`body { background-color: ${darkLayoutColor}}`}</style>
      </Helmet>
      <Helper theme="dark">{children}</Helper>
    </>
  )
}

export default DarkLayout
