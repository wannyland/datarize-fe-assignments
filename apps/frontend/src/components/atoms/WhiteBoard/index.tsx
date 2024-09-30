import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import API from '../../../api'
import useDebounce from '../../../hooks/useDebounce'
import useGetQuery from '../../../hooks/useTQuery'
import { CustomerFilter, ResponseCustomers } from '../../../model/customer'
import { PeriodPurchaseFrequency, ResponsePurchaseFrequency } from '../../../model/purchase'
import { initMenuState } from '../../../recoil/atom/menu'
import Customers from '../../customers'
import PurchaseFrequency from '../../purchaseFrequency'
import RangeDatePicker from '../RangeDatePicker'
import WhiteBoardTitle from '../WhiteBoardTitle'
import { StyledWhiteBoard } from './index.styled'

const WhiteBoard = () => {
  // menu 전역 상태 스테이트
  const menuState = useRecoilValue(initMenuState)

  // 고객 구매 빈도 필터
  const [purchasePeriod, setPurchasePeriod] = useState<PeriodPurchaseFrequency>()

  // 고객 목록 필터
  const [customerFilter, setCustomerFilter] = useState<CustomerFilter>({
    sortBy: 'desc',
    name: undefined,
  })

  const {
    data: purchaseData,
    refetch: refetchPurchaseFrequency,
    isError: purchaseError,
    isLoading: purchaseLoading,
  } = useGetQuery({
    queryKey: ['@GET_PURCHASE_FREQUENCY'],
    queryFn: () => API.purchase.getFrequency(purchasePeriod),
    select: (data: Array<ResponsePurchaseFrequency>) => {
      return data
    },
    enabled: menuState === 'purchase',
  })

  const {
    data: customersData,
    refetch: refetchCustomersData,
    isError: customersError,
    isLoading: customersLoading,
  } = useGetQuery({
    queryKey: ['@GET_CUSTOMERS'],
    queryFn: () => API.customers.getCustomers(customerFilter),
    select: (data: Array<ResponseCustomers>) => {
      return data
    },
    enabled: menuState === 'customers',
  })

  const onChangeCustomerFilter = (e: string, type: 'sortBy' | 'name') => {
    setCustomerFilter((_) => ({
      ..._,
      [type]: e,
    }))
  }

  // 고객 이름 검색 디바운스
  const debounceCustomers = useDebounce(refetchCustomersData, 300)

  // 기간이 변경될 때만 구매 빈도 재호출
  useEffect(() => {
    refetchPurchaseFrequency()
  }, [purchasePeriod])

  // 고객 이름, 정렬만 변경될 시 고객들 재호출
  useEffect(() => {
    debounceCustomers()
  }, [customerFilter])

  return (
    <StyledWhiteBoard.Container>
      {(purchaseLoading || customersLoading) && <>데이터를 불러오는 중입니다. 잠시만 기다려주세요.</>}
      {menuState === 'purchase' && (
        <>
          {/* 구매 빈도 추이 데이터가 있을 때만 렌더링 */}
          {purchaseData && purchaseData.length > 0 && (
            <>
              <WhiteBoardTitle
                title="가격대별 구매 빈도"
                children={<RangeDatePicker getDate={(start, end) => setPurchasePeriod({ from: start, to: end })} />}
              />
              <PurchaseFrequency x={purchaseData.map((_) => _.range)} y={purchaseData.map((_) => _.count)} />
            </>
          )}

          {/* 구매 빈도 데이터 없을시 해당 시나리오 출력 */}
          {!purchaseData && !purchaseLoading && purchaseError && (
            <p>구매한 제품이 없습니다. 제품을 구매하여 빈도를 확인해 보세요!</p>
          )}
        </>
      )}

      {menuState === 'customers' && (
        <>
          {customersData && customersData.length > 0 && (
            <>
              <WhiteBoardTitle title="가장 많이 구매한 고객 목록 및 검색 기능" />
              <Customers
                data={customersData}
                searchValue={customerFilter.name}
                onChange={(e, t) => onChangeCustomerFilter(e, t)}
                isError={customersError}
              />
            </>
          )}

          {/* 고객 정보 데이터 없을시 해당 시나리오 출력 */}
          {!customersData && !customersLoading && customersError && <p>고객 정보가 없습니다.</p>}
        </>
      )}
    </StyledWhiteBoard.Container>
  )
}

export default WhiteBoard
