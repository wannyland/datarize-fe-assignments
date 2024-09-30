import { atom } from 'recoil'

export const initMenuState = atom<string>({
  key: '@MenuState',
  default: 'purchase',
})
