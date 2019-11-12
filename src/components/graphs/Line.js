import React, { useState, useEffect } from 'react'

import { Line } from 'react-chartjs-2';

import { makeGraph } from '../../utils/graphs'


const LineGraph = (props) => {


    const { historicalDate, baseCurrencey, exchangeCurrency } = props.info
    const [rates, setRates] = useState([])


    useEffect(() => {
        makeGraph(historicalDate, baseCurrencey, exchangeCurrency)
            .then(res => setRates(res))

    }, [historicalDate, baseCurrencey, exchangeCurrency])


    const data = {
        labels: [historicalDate, 'Today'],
        datasets: [
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#008000',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: rates
            }
        ]
    }




    return (

        <Line data={data} />

    )
}


export default LineGraph