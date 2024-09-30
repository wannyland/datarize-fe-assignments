import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import API from '../../../api'
import useGetQuery from '../../../hooks/useTQuery'
import { PeriodPurchaseFrequency, ResponsePurchaseFrequency } from '../../../model/purchase'
import { initMenuState } from '../../../recoil/atom/menu'
import PurchaseFrequency from '../../purchaseFrequency'
import RangeDatePicker from '../RangeDatePicker'
import WhiteBoardTitle from '../WhiteBoardTitle'
import { StyledWhiteBoard } from './index.styled'

const WhiteBoard = () => {
  // menu 전역 상태 스테이트
  const menuState = useRecoilValue(initMenuState)

  const [period, setPeriod] = useState<PeriodPurchaseFrequency>()

  const {
    data: purchaseData,
    refetch: refetchPurchaseFrequency,
    isError,
    isLoading,
  } = useGetQuery({
    queryKey: ['@GET_PURCHASE_FREQUENCY'],
    queryFn: () => API.purchase.getFrequency(period),
    select: (data: Array<ResponsePurchaseFrequency>) => {
      return data
    },
    enabled: menuState === 'purchase',
  })

  useEffect(() => {
    refetchPurchaseFrequency()
  }, [period])

  return (
    <StyledWhiteBoard.Container>
      {isLoading && <>데이터를 불러오는 중입니다. 잠시만 기다려주세요.</>}
      {menuState === 'purchase' && (
        <>
          {/* 구매 빈도 추이 데이터가 있을 때만 렌더 */}
          {purchaseData && purchaseData.length > 0 && (
            <>
              <WhiteBoardTitle
                title="가격대별 구매 빈도"
                children={<RangeDatePicker getDate={(start, end) => setPeriod({ from: start, to: end })} />}
              />
              <PurchaseFrequency x={purchaseData.map((_) => _.range)} y={purchaseData.map((_) => _.count)} />
            </>
          )}

          {/* 구매 빈도 데이터 없을시 해당 시나리오 출력 */}
          {!purchaseData && !isLoading && isError && (
            <p>구매한 제품이 없습니다. 제품을 구매하여 빈도를 확인해 보세요!</p>
          )}
        </>
      )}

      {menuState === 'members' && (
        <>
          <WhiteBoardTitle title="가장 많이 구매한 고객 목록 및 검색 기능" />
        </>
      )}
    </StyledWhiteBoard.Container>
  )
}

export default WhiteBoard
