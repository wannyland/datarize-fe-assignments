import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(226, 226, 233);
`

const Section = styled.div`
  display: flex;
  max-width: 640px;
  margin: 0px auto;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-shadow: none;
  margin-top: 0px !important;
  gap: 2rem;
  height: 60px;
  overflow: hidden;
  margin-bottom: 0px;
`

const Title = styled.div<{ $isActive: boolean }>`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  ${(p) =>
    p.$isActive &&
    css`
      font-weight: 700;
      color: #4870f6;
    `}
`

export const StyledMenu = {
  Container,
  Section,
  Wrapper,
  Title,
}
