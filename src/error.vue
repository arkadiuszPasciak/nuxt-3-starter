<template>
  <div class="Error">
    <template v-if="error && error.statusCode">
      <span class="code">{{ error.statusCode }}</span>
      <p class="message">{{ t(`Error.messages.${error.statusCode}`) }}</p>
    </template>
    <button class="button" @click="handleError">
      {{ t('Error.button.back-to-home-page') }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { IErrorProps } from '@/supports/error.supports'

defineProps({
  error: {
    type: Object as PropType<IErrorProps>,
    required: true,
  },
})

const { t } = useI18n()

const handleError = () => clearError({ redirect: '/' })
</script>

<i18n src="@/locales/error.locales.json"></i18n>

<style lang="scss"></style>
