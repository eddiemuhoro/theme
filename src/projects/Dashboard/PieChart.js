import React from 'react'
import 'chart.js/auto';
import { Line, Pie } from 'react-chartjs-2'

const PieChart = ({chartData}) => {
  return (
    <div className="chart-container" style={{width:'70%'}}>
        <Line sx={{ color:"white" , width:'100%', height:'100%'}}
        data={chartData}
        options={{
            plugins: {
            title: {
                display: true,
                text: "Users Gained between 2016-2022"
            },
            legend:{
                display:false,
            }

            }
        }}
        />
  </div>
  )
}

export default PieChart