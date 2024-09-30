import { BarElement, CategoryScale, ChartData, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { Bar } from 'react-chartjs-2'

// chart 라이브러리 사용 선언
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
}

interface Props {
  data: ChartData<'bar', number[], string>
}

const BarChart = ({ data }: Props) => {
  return <Bar options={options} data={data} />
}

export default BarChart
