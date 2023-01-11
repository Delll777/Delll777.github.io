import en from './en'
import ru from './ru'

export const locales = {
  en: 'English',
  ru: 'Russian / Русский',
}

export type LocalesType = keyof typeof locales

export const messages = {
  en,
  ru,
}
