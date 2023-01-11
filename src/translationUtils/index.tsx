import React, { FC } from 'react'
import { LocalesType } from '../translations'

type LocaleContextType = {
  locale: string
  setLocale: (locale: string) => void
}

export const LocaleContext = React.createContext<LocaleContextType | any>('')

type LocaleContextProviderProps = {
  children: React.ReactNode
}

const LocaleContextProvider: FC<LocaleContextProviderProps> = ({
  children,
}) => {
  const [locale, setLocale] = React.useState<LocalesType>('ru')

  return (
    <LocaleContext.Provider value={[locale, setLocale]}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleContextProvider
