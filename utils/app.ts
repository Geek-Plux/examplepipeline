import { ThemeManager } from './theme'
import { LanguageManager } from './lang'

export function AppSetup() {
  // use theme manager
  const themeManager = ThemeManager()

  // use language manager
  const languageManager = LanguageManager()

  // vue transition bug handle
  const messages = [
    `Uncaught 