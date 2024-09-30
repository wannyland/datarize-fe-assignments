import styled from 'styled-components'

const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1.2rem;
  text-align: left;
`

const Head = styled.thead`
  background-color: #f4f4f4;
`

const Row = styled.tr`
  cursor: pointer;
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`

const Header = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`

const Data = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`

export const StyledTable = {
  Container,
  Head,
  Row,
  Header,
  Data,
}
