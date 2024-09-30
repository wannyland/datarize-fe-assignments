import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { ModalType } from '../model/common'
import { modalState } from '../recoil/atom/modal'

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState<ModalType>(modalState)

  const closeModal = useCallback(() => {
    document.body.style.overflow = 'auto'
    setModalDataState((prev) => {
      return { ...prev, isOpen: false }
    })
  }, [setModalDataState])

  const openModal = useCallback(
    ({ content }: ModalType) => {
      document.body.style.overflow = 'hidden'

      setModalDataState({
        isOpen: true,
        content,
      })
    },
    [setModalDataState],
  )

  const Modal = ({ content }: ModalType) => {
    const ModalData: ModalType = {
      content: content,
    }
    return openModal(ModalData)
  }

  return {
    modalDataState,
    closeModal,
    Modal,
  }
}
