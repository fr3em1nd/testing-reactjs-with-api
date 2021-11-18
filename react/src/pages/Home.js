import React from 'react';
import Header from './../sections/Header';
import { Bar } from 'react-chartjs-2';
import useGraphData from '../hooks/useGraphData';




const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Income',
        data: [12, 19, 3, 5, 2, 3,2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Expenses',
        data: [2, 3, 20, 5, 1, 4,12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(54, 162, 235)',
        stack: 'Stack 0',
      } 
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  
export default function Home() {

    const {getGraphData} = useGraphData();


    return(
        <div className="page">
            <Header/>
            <h3 className="page__body">Graph Shows here</h3>
            <Bar data={data} options={options} />
        </div>
    )
};