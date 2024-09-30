import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import API from '../../../api'
import useGetQuery from '../../../hooks/useTQuery'
import { ResponseCustomers } from '../../../model/customer'

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
  align-items: center;
  margin-bottom: 15px;
`

const ProductThumbnail = styled.img`
  width: 50px;
  height: 50px;
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

interface ModalProps {
  isVisible: boolean
  onClose: () => void
  id: number
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, id }) => {
  const [purchaseInfo, setPurchaseInfo] = useState<any>(null)
  const {
    data: customersData,
    refetch: refetchCustomersData,
    isLoading,
    isError,
  } = useGetQuery({
    queryKey: ['@GET_CUSTOMER_PURCHASE_INFO', id],
    queryFn: () => API.customers.getPurchaseInfo(id),
    select: (data: Array<ResponseCustomers>) => {
      return data[0] // 고객 구매 정보가 첫 번째 데이터라 가정
    },
    enabled: false,
  })

  useEffect(() => {
    if (id !== -1) {
      refetchCustomersData()
    }
  }, [id, refetchCustomersData])

  useEffect(() => {
    if (customersData) {
      setPurchaseInfo(customersData) // 데이터를 상태로 설정
    }
  }, [customersData])

  if (!isVisible) return null

  if (isLoading) return <div>Loading...</div> // 로딩 상태 처리
  if (isError) return <div>Error loading data...</div> // 에러 처리

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <PurchaseDate>구입 날짜: {purchaseInfo?.date || 'N/A'}</PurchaseDate>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ProductList>
          {purchaseInfo?.products?.map((product: any) => (
            <ProductItem key={product.id}>
              <ProductThumbnail src={product.thumbnail} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              </ProductInfo>
            </ProductItem>
          )) || <div>No products found</div>}
        </ProductList>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal
