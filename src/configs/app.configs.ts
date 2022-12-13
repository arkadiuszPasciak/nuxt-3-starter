import { ThemeManager } from '@/configs/theme.configs'
import { IAppSetupData } from '@/supports/app.supports'

export function AppSetup(): IAppSetupData {
  const themeManager = ThemeManager()

  return {
    themeManager,
  }
}
