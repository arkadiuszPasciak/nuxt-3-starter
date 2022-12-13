import { defineNuxtConfig } from 'nuxt/config'
import { NuxtI18nOptions } from '@nuxtjs/i18n'
import { EI18nLocales } from './src/supports/i18n.supports'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    i18n?: NuxtI18nOptions
  }
}

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  buildDir: 'src/.nuxt',

  i18n: {
    vueI18n: {
      locale: EI18nLocales.ENGLISH,
      fallbackLocale: EI18nLocales.ENGLISH,
      availableLocales: [EI18nLocales.ENGLISH, EI18nLocales.POLISH],
      legacy: false,
    },
  },

  modules: ['@nuxtjs/i18n', '@pinia/nuxt'],

  srcDir: 'src/',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: [
            `
            @import "@/styles/colors.styles.scss";
            @import "@/styles/hover.styles.scss";
            @import "@/styles/media.styles.scss";
          `,
          ],
        },
      },
    },
  },
})
