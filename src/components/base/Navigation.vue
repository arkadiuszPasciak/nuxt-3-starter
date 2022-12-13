<template>
  <nav class="Navigation">
    {{ t('Navigation.title') }}
  </nav>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<i18n src="@/locales/navigation.locales.json"></i18n>

<style lang="scss" scoped></style>
