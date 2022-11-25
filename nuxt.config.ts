import { defineNuxtConfig } from 'nuxt/config'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import { EISOCodes } from './src/supports/intlify.supports'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
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

  intlify: {
    vueI18n: {
      locale: EISOCodes.ENGLISH,
      fallbackLocale: EISOCodes.ENGLISH,
      availableLocales: [EISOCodes.ENGLISH, EISOCodes.POLISH],
      legacy: false,
    },
  },

  modules: ['@intlify/nuxt3', '@pinia/nuxt'],

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
