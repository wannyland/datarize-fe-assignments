import { useEffect } from 'react'
import styled from 'styled-components'
import API from '../../../../api'
import { addNumberComma } from '../../../../function'
import { useModal } from '../../../../hooks/useModal'
import useGetQuery from '../../../../hooks/useTQuery'
import { ResponseCustomerPurChaseInfo } from '../../../../model/customer'

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

const PurchaseDate = styled.p`
  font-size: 1.1rem;
  color: #333;
  font-weight: bold;
`

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`

const ProductItem = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${(p) => p.theme.color.gray8};
  margin-bottom: 35px;
`

const ProductThumbnail = styled.img`
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
`

const ProductInfo = styled.div`
  flex: 1;
`

const ProductName = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin: 0;
`

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`

const OpenModalButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

interface Props {
  id: number
}
const CustomerModal = ({ id }: Props) => {
  const { closeModal } = useModal()

  const {
    data: purchaseData,
    refetch: refetchCustomersData,
    isLoading,
    isError,
  } = useGetQuery({
    queryKey: ['@GET_CUSTOMER_PURCHASE_INFO', id],
    queryFn: () => API.customers.getPurchaseInfo(id),
    select: (data: Array<ResponseCustomerPurChaseInfo>) => {
      return data // 고객 구매 정보가 첫 번째 데이터라 가정
    },
    enabled: false,
  })

  useEffect(() => {
    if (id !== -1) {
      refetchCustomersData()
    }
  }, [id, refetchCustomersData])

  return (
    <>
      <ModalHeader>
        <PurchaseDate>구매 내역</PurchaseDate>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
      </ModalHeader>
      <ProductList>
        {purchaseData?.map((_, i) => {
          return (
            <ProductItem key={`purchase_${_.date}`}>
              <ProductName>구입 날짜 : {_.date}</ProductName>
              <ProductThumbnail src={_.imgSrc} alt={_.product} />
              <ProductInfo>
                <ProductName>상품 : {_.product}</ProductName>
                <ProductPrice>가격 : {addNumberComma(_.price)}</ProductPrice>
              </ProductInfo>
            </ProductItem>
          )
        })}
      </ProductList>
    </>
  )
}

export default CustomerModal
