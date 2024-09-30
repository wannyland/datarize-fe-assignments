import styled from 'styled-components'
import { useModal } from '../../../../hooks/useModal'

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const GlobalModal = () => {
  const { modalDataState, closeModal } = useModal()

  return (
    modalDataState.isOpen && (
      <ModalOverlay>
        <ModalContainer>{modalDataState.content}</ModalContainer>
      </ModalOverlay>
    )
  )
}

export default GlobalModal
