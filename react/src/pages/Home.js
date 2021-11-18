import React from 'react';
import { useState, useEffect } from 'react';
import Header from './../sections/Header';


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



import axios from 'axios';

export default function Home() {

    const [graphData, setGraphData] = useState(null);


    useEffect(() => {
        async function fillGraph() {
            await axios.get('/graph')
                .then(res => {
                    setGraphData(res.data.result[0]);

                }).catch(err => {
                    console.log(err);

                });
        }

        fillGraph();
    }, []);


    return (
        <div className="page">
            <Header />
            <h3 className="page__body">Graph Shows here</h3>


            <BarChart
                width={500}
                height={300}
                data={graphData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#8884d8" />
                <Bar dataKey="expense" fill="#82ca9d" />
            </BarChart>

        </div>
    )
};