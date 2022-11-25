<template>
  <Html :class="`theme-${theme}`" :lang="locale">
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
import { AppSetup } from '@/configs/app.configs'
import { TThemes } from '@/supports/theme.supports'
import { TISOCodes } from '@/supports/intlify.supports'

const theme = useState<TThemes>('theme.current')
const locale = useState<TISOCodes>('locale.setting')

AppSetup()
</script>

<style lang="scss">
@import '@/styles/reset.styles.scss';
@import '@/styles/base.styles.scss';
</style>
