import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { LineChartdata } from './Graph data/Linegraph-data.js'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend )

const LineGraph = () => {
    const options = {}
  return (
    <>
        <Line options={options} data={ LineChartdata } />
    </>
  )
}

export default LineGraph