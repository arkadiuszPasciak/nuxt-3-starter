/// <reference types="vitest" />

import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  plugins: [vue(), vueI18n(), tsconfigPaths()],
  test: {
    globals: true,
    include: [
      'src/tests/units/*.units.ts',
      'src/tests/integrations/*.integrations.ts',
    ],
  },
})
