import React from 'react'
import './chart.css';
import { Chart as ChartJS,ArcElement,Tooltip, Legend } from 'chart.js';
import {Doughnut} from "react-chartjs-2";
ChartJS.register(ArcElement,Legend,Tooltip);
const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
export default function Chart() {
  return (
    <div className='doughnut-charts'>
      <div className='toptitle'>
        <h1 className='title'>Storage Occupied</h1>
      </div>
    <div style={{position:'relative',width:'300px',height:'300px'}}>
      <Doughnut data={data} options={{ responsive: true,
          maintainAspectRatio: false,}}/></div>
    </div>
  )
}
