import React, { useState, useEffect } from 'react'

import { Line } from 'react-chartjs-2';
import { makeGraph, makeDatesArray, } from '../../utils/graphs'



const LineGraph = (props) => {



    const { dateRange, baseCurrencey, exchangeCurrency, preset } = props.info

    const [rates, setRates] = useState([])

    /// i think a lot of this needs to happen before it reaches the line graph component
    // graph component shouldnt have this much logic and really should only be doing one thing
    // should be purely functional based on the things that get passed into it 
    // have a function that preps my array and then pass it into the linegraph 

    useEffect(() => {
        makeGraph(dateRange, baseCurrencey, exchangeCurrency, preset)
            .then(res => setRates(res))
    }, [dateRange, baseCurrencey, exchangeCurrency, preset])


    // labels will need to change when the presets changes

    const data = {
        labels: makeDatesArray(dateRange),
        datasets: [
            {
                label: `${baseCurrencey} conversion rate to ${exchangeCurrency}`,
                fill: true,
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