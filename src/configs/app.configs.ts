import { ThemeManager } from '@/configs/theme.configs'
import { LanguageManager } from '@/configs/intlify.configs'
import { IAppSetupData } from '@/supports/app.supports'

export function AppSetup(): IAppSetupData {
  const themeManager = ThemeManager()
  const languageManager = LanguageManager()

  return {
    themeManager,
    languageManager,
  }
}
