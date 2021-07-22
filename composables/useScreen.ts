export enum Size {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl',
}

export type ScreenSize =
  | typeof Size.SMALL
  | typeof Size.MEDIUM
  | typeof Size.LARGE
  | typeof Size.EXTRA_LARGE

export const defaultScreenConfig = {
  [Size.SMALL]: 576,
  [Size.MEDIUM]: 768,
  [Size.LARGE]: 992,
  [Size.EXTRA_LARGE]: 1200,
}

export const useScreen = () => {
  const screenSize = reactive({
    width: 0,
    height: 0,
  })

  const current = ref<ScreenSize>(Size.SMALL)

  const getSize = (width?: number) => {
    if (width === undefined) width = screenSize.width
    const {
      [Size.SMALL]: sm,
      [Size.MEDIUM]: md,
     