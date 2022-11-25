<template>
  <div class="IndexPage">
    <ThemeSwitcher />
    <LanguageSwitcher />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import ThemeSwitcher from '@/components/switcher/ThemeSwitcher.vue'
import LanguageSwitcher from '@/components/switcher/LanguageSwitcher.vue'

const { t } = useI18n()

definePageMeta({
  layout: 'default',
})

useHead(() => ({
  title: t('Index.head.title'),
  meta: [
    {
      name: 'description',
      content: t('Index.head.description'),
    },
  ],
}))
</script>

<i18n src="@/locales/pages/index.locales.json"></i18n>

<style lang="scss" scoped></style>
