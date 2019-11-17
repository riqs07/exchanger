import React, { useState, useEffect } from 'react'

import { Bar } from 'react-chartjs-2';


const BarGraph = (props) => {
    const { baseCurrencey, exchangeCurrency, conversionRate, exchangeAmount, baseAmount } = props.info


    const [rate, setRate] = useState()

    useEffect(() => {
        let x = rate * 1;
        console.log(x)

    }, [])


    const data = {
        labels: [baseCurrencey, exchangeCurrency],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(102,187,106,0.2)',
                borderColor: 'rgba(102,187,106,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(67,160,71,0.4)',
                hoverBorderColor: 'rgba(67,160,71,1)',
                data: [baseAmount, exchangeAmount]
            }
        ]
    }




    return (

        <Bar data={data} />
    )
}


export default BarGraph