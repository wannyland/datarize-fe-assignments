import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  color: {
    white: '#fff',
    gray1: '#F8F8F8',
    gray2: '#F5F6F6',
    gray3: '#F3F3F4',
    gray4: '#EEEEF0',
    gray5: '#E7E8E9',
    gray6: '#DDDEE1',
    gray7: '#CFD0D3',
    gray8: '#B4B6BB',
    gray9: '#9A9CA2',
    gray10: '#80838B',
    gray11: '#666970',
    gray12: '#4E5055',
    gray13: '#36373B',
    gray14: '#313235',
    gray15: '#27282B',
    gray16: '#1D1E20',
    gray17: '#18191B',

    blueGray1: '#F4F6F7',
    blueGray2: '#DFE5E9',
    blueGray3: '#B6C3CC',
    blueGray4: '#8DA1B0',
    blueGray5: '#6F879B',
    blueGray9: '#2E3942',
  },
  size: {
    container_min_width: '1440px',
    aside_width: '260px',
    thead_tr_height: '36px',
    tbody_tr_height: '46px',
    header_height: '52px',
    mobile_header_height: '56px',
    mobile_safe_inline: '18px',
    sideSheet_width: '532px',
    form_height_size36: '36px',
    form_height_size44: '44px',
    form_padding_inline: '14px',
  },

  grayScale: {
    gray1: '#F5F6F7',
    gray2: '#E6E8EC',
    gray3: '#CFD2D9',
    gray4: '#B5BAC4',
    gray5: '#A1A6B1',
    gray6: '#787F8F',
    gray7: '#626975',
    gray8: '#4D525C',
    gray9: '#373B42',
    gray10: '#222429',
  },

  table: {
    th_color: '#9399a5',
    th_background: '#F4F6F9',
    line: '#F0F2F4',
  },
  button: {
    primary: '#4870F6',
    primary_hover: '#335FF5',

    light_primary: 'rgba(72, 112, 246, 0.07)',
    black: '#222429',
    black_hover: '#161819',
    darkgray: '#4D525C',
    darkgray_hover: '#373B42',
    gray: '#787F8F',
    gray_hover: '#626975',
    light_gray: '#F5F6F7',
    negative: '#F4554A',
    negative_hover: 'rgba(229, 79, 70, 1)',
    disabled: '#E6E8EC',
  },
}

export const _size = {
  container_min_width: '1440px',
  aside_width: '260px',
  thead_tr_height: '36px',
  tbody_tr_height: '46px',
  header_height: '52px',
  mobile_header_height: '56px',
  mobile_safe_inline: '18px',
  sideSheet_width: '532px',
  form_height_size36: '36px',
  form_height_size44: '44px',
  form_padding_inline: '14px',
}

export const _colors = {
  white: '#fff',
  gray1: '#F8F8F8',
  gray2: '#F5F6F6',
  gray3: '#F3F3F4',
  gray4: '#EEEEF0',
  gray5: '#E7E8E9',
  gray6: '#DDDEE1',
  gray7: '#CFD0D3',
  gray8: '#B4B6BB',
  gray9: '#9A9CA2',
  gray10: '#80838B',
  gray11: '#666970',
  gray12: '#4E5055',
  gray13: '#36373B',
  gray14: '#313235',
  gray15: '#27282B',
  gray16: '#1D1E20',
  gray17: '#18191B',

  blueGray1: '#F4F6F7',
  blueGray2: '#DFE5E9',
  blueGray3: '#B6C3CC',
  blueGray4: '#8DA1B0',
  blueGray5: '#6F879B',
  blueGray9: '#2E3942',
}

export const _zIndex = {
  dialog: 1200,
  modal: 1100,
  sideSheet: 1000,
  popover: 900,
}

export const _box_shadow = {
  card_box_shadow: '0 0 8px 0 rgba(113,117,126,0.04)',
}

export type SizeTypes = keyof typeof _size
export type BoxShadowTypes = keyof typeof _box_shadow
export type ZindexTypes = keyof typeof _zIndex
export type ColorsTypes = keyof typeof _colors

type Subset<T> = {
  [K in keyof T]?: T[K]
}
type IndexKeys<T extends string | number | symbol> = {
  [K in T]: string | number
}
type Keys<T extends string | number | symbol> = { [K in T]: string }

// 전역 스타일 커스텀 모듈 설정
declare module 'styled-components' {
  export interface DefaultTheme {
    color: Subset<Keys<ColorsTypes>>
    size: Subset<Keys<SizeTypes>>
  }
}
