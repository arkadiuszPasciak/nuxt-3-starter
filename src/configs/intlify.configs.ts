import { useI18n } from 'vue-i18n'
import {
  IAvailableLocales,
  ILanguageManager,
  EISOCodes,
  ELocalesNames,
} from '@/supports/intlify.supports'

export const availableLocales: IAvailableLocales = {
  en: {
    name: ELocalesNames.ENGLISH,
    iso: EISOCodes.ENGLISH,
  },
  pl: {
    name: ELocalesNames.POLISH,
    iso: EISOCodes.POLISH,
  },
}

export function LanguageManager(): ILanguageManager {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'en'
      return availableLocales[foundLang] ? foundLang : 'en'
    } catch (error) {
      return 'en'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}
