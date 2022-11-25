<template>
  <header class="Header">
    {{ t('Header.title') }}
    <Logo />
    <Navigation />
  </header>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import Logo from '@/components/base/Logo.vue'
import Navigation from '@/components/base/Navigation.vue'

const { t } = useI18n()
</script>

<i18n src="@/locales/components/header.locales.json"></i18n>

<style lang="scss" scoped></style>
