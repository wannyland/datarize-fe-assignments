import BarChart from '../atoms/Chart'
import { StyledWhiteBoard } from '../atoms/WhiteBoard/index.styled'

interface Props {
  x: string[]
  y: number[]
}
const PurchaseFrequency = ({ x, y }: Props) => {
  const labels = x ?? []
  const data = {
    labels,
    datasets: [
      {
        label: '빈도',
        data: y ?? [],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }
  return (
    <StyledWhiteBoard.Card>
      <div>가격대별 구매 빈도 차트</div>
      <div style={{ width: '100%', minHeight: '290px' }}>
        <BarChart data={data} />
      </div>
    </StyledWhiteBoard.Card>
  )
}

export default PurchaseFrequency
