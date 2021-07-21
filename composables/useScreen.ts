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

export const defaultSc