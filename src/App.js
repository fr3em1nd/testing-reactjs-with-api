import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';
import axios from "axios";

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Income',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Expenses',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
      stack: 'Stack 0',
    },

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



 

export default  function App() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get('/testing.json').then((response) => {
    
      console.log(response);
      setPost(response.data);
    });
  }, []);

return(
  <>
    <div className='header'>
      <h1 className='title'>Simple Barchart   </h1>
    </div>
    
    <Bar data={data} options={options} />
  </>
);

}



