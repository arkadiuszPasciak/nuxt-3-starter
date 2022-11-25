import {
  EThemeTypes,
  TThemes,
  IThemeManager,
  IAvailableThemes,
} from '@/supports/theme.supports'

export function ThemeManager(): IThemeManager {
  // composable
  const themeUserSetting = useCookie<TThemes>('theme')

  // methods
  const getUserSetting = (): TThemes =>
    themeUserSetting.value || EThemeTypes.SYSTEM
  const getSystemTheme = (): TThemes => {
    try {
      return window
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? EThemeTypes.DARK
          : EThemeTypes.LIGHT
        : EThemeTypes.DARK
    } catch (error) {
      return EThemeTypes.DARK
    }
  }

  // state
  const themeSetting = useState<TThemes>('theme.setting', () =>
    getUserSetting()
  )
  const themeCurrent = useState<TThemes>('theme.current', () =>
    process.client ? getSystemTheme() : EThemeTypes.LIGHT
  )

  // watchers
  const onThemeSettingChange = (themeSetting: TThemes) => {
    themeUserSetting.value = themeSetting
    if (themeSetting === EThemeTypes.SYSTEM) {
      themeCurrent.value = getSystemTheme()
    } else {
      themeCurrent.value = themeSetting
    }
  }
  watch(themeSetting, (val) => onThemeSettingChange(val))
  const onThemeSystemChange = () => {
    if (themeSetting.value === EThemeTypes.SYSTEM) {
      themeCurrent.value = getSystemTheme()
    }
  }

  // init theme
  const init = () => {
    themeSetting.value = getUserSetting()
  }
  onThemeSettingChange(themeSetting.value)

  // lifecycle
  let intervalCheckTime: NodeJS.Timer
  onBeforeMount(() => init())
  onMounted(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onThemeSystemChange)
  })
  onBeforeUnmount(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', onThemeSystemChange)
    if (intervalCheckTime) clearInterval(intervalCheckTime)
  })

  return {
    themeSetting,
    themeCurrent,
    getUserSetting,
    getSystemTheme,
  }
}

export const availableThemes: Array<IAvailableThemes> = [
  { key: EThemeTypes.LIGHT, name: 'light' },
  { key: EThemeTypes.DARK, name: 'dark' },
  { key: EThemeTypes.SYSTEM, name: 'system' },
]
