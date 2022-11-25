import { Ref } from 'vue'

export enum EThemeTypes {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

export type TThemes = EThemeTypes.DARK | EThemeTypes.LIGHT | EThemeTypes.SYSTEM

export interface IThemeManager {
  themeSetting: Ref<TThemes>
  themeCurrent: Ref<TThemes>
  getUserSetting: () => TThemes
  getSystemTheme: () => TThemes
}

export interface IAvailableThemes {
  key: TThemes
  name: string
}
