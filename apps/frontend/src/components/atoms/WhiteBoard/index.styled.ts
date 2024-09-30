import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 60px;
  max-width: 640px;
  align-self: center;
  gap: 1rem;
`

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #e2e2e9;
  gap: 20px;
  padding: 1rem;
`

export const StyledWhiteBoard = {
  Container,
  Card,
}
