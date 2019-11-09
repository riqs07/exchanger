import React, { useState, useEffect, Fragment } from 'react'
import DaySelect from '../components/DatePicker'
import Selection from '../components/Selection';
import { getHistoricalExchangeRate } from '../utils/api'



const Comparison = () => {
    const [baseCurrencey, setBaseCurrencey] = useState()
    const [exchangeCurrency, setExchangeCurrency] = useState()
    const [historicalDate, setHistoricalDate] = useState()

    const [historicalRate, setHistoricalRate] = useState()


    useEffect(() => {
        const flag = checkVals()
        if (flag === true) {
            getHistoricalExchangeRate(historicalDate, 'USD', 'GBP')
                .then(rate => setHistoricalRate(rate))

            dateToNum()
        }
    }, [baseCurrencey, exchangeCurrency, historicalDate])


    const checkVals = () => {
        if (baseCurrencey !== undefined &&
            exchangeCurrency !== undefined) {
            return true
        } else { return false }
    }

    const dateToNum = () => {
        let array = historicalDate.split('-')

        let [day, month, year] = historicalDate.split('-');
        let x = array.map(x => parseInt(x))
        let num = x[2]

        let e = new Date(historicalDate)
        let f = new Date(month, day, year)
        console.log(e, f, day, month, year)
    }

    return (
        <Fragment >

            <h1>Historical Date Comparison</h1>

            <h2>{historicalRate}</h2>
            <h2>{historicalDate}</h2>
            <Selection monitor={setBaseCurrencey} />
            <Selection monitor={setExchangeCurrency} />
            <DaySelect monitor={setHistoricalDate} />
        </Fragment >

    )
}

export default Comparison