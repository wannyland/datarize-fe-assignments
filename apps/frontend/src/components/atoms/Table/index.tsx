import React from 'react'
import { StyledTable } from '../../customers/index.styled'

interface Props {
  headers: string[]
  children: React.ReactNode
}
const Table = ({ headers, children }: Props) => {
  return (
    <StyledTable.Container>
      <StyledTable.Head>
        <StyledTable.Row>
          {headers.map((_, i) => {
            return <StyledTable.Header key={`table_header_${i}`}>{_}</StyledTable.Header>
          })}
        </StyledTable.Row>
      </StyledTable.Head>
      <tbody>{children}</tbody>
    </StyledTable.Container>
  )
}

export default Table
