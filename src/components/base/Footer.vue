<template>
  <footer class="Footer">
    {{ t('Footer.title') }}
  </footer>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<i18n src="@/locales/footer.locales.json"></i18n>

<style lang="scss" scoped></style>
