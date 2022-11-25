import { ILanguageManager } from '@/supports/intlify.supports'
import { IThemeManager } from '@/supports/theme.supports'

export interface IAppSetupData {
  languageManager: ILanguageManager
  themeManager: IThemeManager
}
