import React, { useState, useEffect, Fragment } from 'react'
import DaySelect from '../components/DatePicker'
import Selection from '../components/Selection';
import { getHistoricalExchangeRate } from '../utils/api'
import LineGraph from '../components/graphs/Line'





const Comparison = () => {
    const [baseCurrencey, setBaseCurrencey] = useState()
    const [exchangeCurrency, setExchangeCurrency] = useState()
    const [historicalDate, setHistoricalDate] = useState()

    const [historicalRate, setHistoricalRate] = useState()


    useEffect(() => {
        const flag = checkVals()
        if (flag === true) {
            getHistoricalExchangeRate(historicalDate, baseCurrencey, exchangeCurrency)
                .then(rate => setHistoricalRate(rate))
        }
    }, [baseCurrencey, exchangeCurrency, historicalDate])



    const checkVals = () => {
        if (baseCurrencey !== undefined &&
            exchangeCurrency !== undefined) {
            return true
        } else { return false }
    }




    return (
        <Fragment >

            <h1>Historical Date Comparison</h1>

            <h2>Current day selected:  {historicalDate}</h2>

            {historicalRate && (
                <Fragment >
                    <h2>Rate was:  {historicalRate}</h2>
                    <h4> 100 {baseCurrencey} was equal to {historicalRate * 100} {exchangeCurrency} </h4>
                    <LineGraph info={{ historicalDate, baseCurrencey, exchangeCurrency }} />

                </Fragment >


            )}


            <Selection monitor={setBaseCurrencey} />
            <Selection monitor={setExchangeCurrency} />
            <DaySelect monitor={setHistoricalDate} />
        </Fragment >

    )
}

export default Comparison