import { useState } from 'react'
import { addNumberComma } from '../../function'
import { useModal } from '../../hooks/useModal'
import { ResponseCustomers } from '../../model/customer'
import Select from '../atoms/Select'
import Table from '../atoms/Table'
import { StyledWhiteBoard } from '../atoms/WhiteBoard/index.styled'
import CustomerModal from '../template/Modal/Customer'
import { StyledTable } from './index.styled'

interface Props {
  data: Array<ResponseCustomers>
  searchValue: string | undefined
  onChange: (e: string, t: 'sortBy' | 'name') => void
  isError: boolean
}

const Customers = ({ data, onChange, searchValue, isError }: Props) => {
  const { Modal } = useModal()
  const [id, setId] = useState<number>(-1)

  const openModal = (id: number) => {
    Modal({
      content: <CustomerModal id={id} />,
    })
  }
  return (
    <StyledWhiteBoard.Card>
      <div>가장 많이 구매한 고객 목록</div>

      <div style={{ width: '100%', minHeight: '290px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          이름 : <input type="text" value={searchValue} onChange={(e) => onChange(e.target.value, 'name')} />
          <Select options={['desc', 'asc']} getValue={(e) => onChange(e, 'sortBy')} />
        </div>

        {!isError && data.length > 0 && (
          <Table
            headers={['ID', '이름', '총 구매 횟수', '총 구매 금액']}
            children={data.map((_: ResponseCustomers) => (
              <StyledTable.Row key={_.id} onClick={() => openModal(_.id)}>
                <StyledTable.Data>{_.id}</StyledTable.Data>
                <StyledTable.Data>{_.name}</StyledTable.Data>
                <StyledTable.Data>{_.count}</StyledTable.Data>
                <StyledTable.Data>{addNumberComma(_.totalAmount)}</StyledTable.Data>
              </StyledTable.Row>
            ))}
          />
        )}
        {isError && <>검색된 데이터가 없습니다.</>}
      </div>
    </StyledWhiteBoard.Card>
  )
}

export default Customers
