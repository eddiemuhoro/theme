import React, { useState } from 'react'
import {Data} from '../../Data'
import PieChart from './PieChart'
const Dashboard = () => {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained ",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ],
                color: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"

                ],
                borderColor: "gray",
               
                borderWidth: 1,
                tension: 0.4,
                hoverOffset: 4,
                hoverBorderWidth: 2,
            
                

              }
        ]
    })
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
       <PieChart chartData = {chartData} />
    </div>
  )
}

export default Dashboard