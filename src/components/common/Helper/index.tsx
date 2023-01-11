import React, { FC, useContext } from 'react'
import Mobile from './mobile/NavBar.mobile'
import { navItems } from '../../../data/nav-bar'
import { locales, LocalesType } from '../../../translations'
import { LocaleContext } from '../../../translationUtils'
import { nextLocale } from '../../../translationUtils/nextLocale'

type HelperProps = {
  children: React.ReactNode
  auth?: boolean
  theme: 'light' | 'dark'
}

const Helper: FC<HelperProps> = ({ children, auth, theme }) => {
  const [locale, setLocale] = useContext(LocaleContext)

  const changeLocale = () => {
    setLocale(nextLocale(locale))
  }

  return (
    <>
      <Mobile
        currentLocaleDisplayText={locales[locale as LocalesType]}
        changeLocale={changeLocale}
        items={navItems}
        auth={auth}
        theme={theme}
      >
        {children}
      </Mobile>
    </>
  )
}

export default Helper
