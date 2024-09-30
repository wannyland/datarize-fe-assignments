import { atom } from 'recoil'
import { ModalType } from '../../model/common'

export const modalState = atom<ModalType>({
  key: 'modalState',
  default: {
    isOpen: false,
    content: '',
  },
})
