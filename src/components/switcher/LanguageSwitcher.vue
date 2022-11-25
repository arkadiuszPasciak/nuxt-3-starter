<template>
  <div class="LanguageSwitcher">
    <select v-model="localeSetting" class="select">
      <option
        v-for="lang in availableLocales"
        :key="lang.iso"
        :value="lang.iso"
        class="option"
      >
        {{ t(`LanguageSwitcher.languages.${lang.name}`) }} ({{ lang.iso }})
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { availableLocales } from '@/configs/intlify.configs'

const localeSetting = useState<string>('locale.setting')
const { t } = useI18n()
</script>

<i18n src="@/locales/components/language-switcher.locales.json"></i18n>

<style lang="scss" scoped>
.theme-dark {
  .LanguageSwitcher {
    color: green;
  }
}

.theme-light {
  .LanguageSwitcher {
    color: pink;
  }
}
</style>
