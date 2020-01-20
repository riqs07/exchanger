import React, { useState, useEffect } from 'react'

import { Bar } from 'react-chartjs-2';

import { getExchangeRate } from '../../utils/api'


const BarGraphx = (props) => {
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

const BarGraph = (props) => {
    const { baseCurrencey } = props.info

    console.log(baseCurrencey)
    // exchangeCurrencyArray.forEach(currency => {
    //     getCountryDatabyCurrencyCode(currency)
    //     .then()
    // });
    useEffect(() => {
        const popular = ['USD', 'EUR', 'GBP', 'CAD', 'MXN', 'AUD', 'CNY']



        let list = popular.map(currency => {
            // getExchangeRate(baseCurrencey, currency)
            //     .then(rate => list.push({ currency, rate }))
            console.log(currency)


        })

    }, [])

    const data = {
        labels: [baseCurrencey],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(102,187,106,0.2)',
                borderColor: 'rgba(102,187,106,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(67,160,71,0.4)',
                hoverBorderColor: 'rgba(67,160,71,1)',
                data: [baseCurrencey]
            }
        ]
    }




    return (

        <Bar data={data} />
    )
}


export default BarGraph