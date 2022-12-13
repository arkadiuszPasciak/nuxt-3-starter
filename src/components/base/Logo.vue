<template>
  <NuxtLink class="Logo" to="/">
    {{ t('Logo.title') }}
  </NuxtLink>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<i18n src="@/locales/logo.locales.json"></i18n>

<style lang="scss" scoped></style>
