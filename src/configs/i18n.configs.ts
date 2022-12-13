import { NuxtI18nOptions } from '@nuxtjs/i18n'
import { EI18nLocales } from '@/supports/i18n.supports'

const i18nConfigs = {
  vueI18n: {
    locale: EI18nLocales.ENGLISH,
    fallbackLocale: EI18nLocales.ENGLISH,
    availableLocales: [EI18nLocales.ENGLISH, EI18nLocales.POLISH],
    legacy: false,
  },
} as NuxtI18nOptions

export default i18nConfigs
