import { locales, LocalesType } from '../translations'

const localesArray: {
  locale: LocalesType
  displayText: string
}[] = Object.keys(locales).map(key => ({
  locale: key as LocalesType,
  displayText: locales[key as LocalesType],
}))

export function nextLocale(currentLocale: LocalesType): LocalesType {
  const currentIndex: number = localesArray.reduce<number>(
    (acc, { locale }, index) => {
      if (locale === currentLocale) {
        return index
      }
      return acc
    },
    -1
  )
  const nextIndex =
    currentIndex + 1 === localesArray.length ? 0 : currentIndex + 1
  return localesArray[nextIndex].locale
}
