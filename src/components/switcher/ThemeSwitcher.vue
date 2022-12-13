<template>
  <div v-if="availableThemes" class="ThemeSwitcher">
    <select v-model="themeSetting" class="select">
      <option
        v-for="theme in availableThemes"
        :key="theme.key"
        :value="theme.key"
      >
        {{ t(`ThemeSwitcher.themes.${theme.name}`) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { availableThemes } from '@/configs/theme.configs'
import { TThemes } from '@/supports/theme.supports'

const themeSetting = useState<TThemes>('theme.setting')
const { t } = useI18n()
</script>

<i18n src="@/locales/theme-switcher.locales.json"></i18n>

<style lang="scss">
.theme-dark body {
  background-color: black;
  color: white;
}

.theme-light body {
  background-color: white;
  color: black;
}
</style>
