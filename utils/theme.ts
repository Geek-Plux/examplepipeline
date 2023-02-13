export type IThemeSettingOptions = 'dark' | 'light' | 'system' | 'realtime'

export type ITheme = 'dark' | 'light'

export const availableThemes: {
  key: IThemeSettingOptions
  text: string
}[] = [
  { key: 'light', text: 'Light' },
  { key: 'dark', text: 'Dark' },
  { key: 'system', text: 'System' },
  { key: 'realtime', text: 'Realtime' },
]

export function ThemeManager() {
  // composable
  const themeUserSetting = useCookie<IThemeSettingOptions>('theme')

  // methods
  const getUserSetting = (): IThemeSettingOptions =>
    themeUserSetting.value || 'system'
  const getSystemTheme = (): ITheme => {
 