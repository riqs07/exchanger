import React, { useState, useEffect, Fragment } from 'react'
import DaySelect from '../components/DatePicker'
import Selection from '../components/Selection';
import { getHistoricalExchangeRate } from '../utils/api'
import LineGraph from '../components/graphs/Line'
import { Row25, Row50 } from '../components/styled/Grid'
import Button from '../components/styled/Button';





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


            {historicalRate && (
                <Fragment>
                    <Row50>

                        <Button text={historicalDate} />
                        <Button text={historicalRate} />

                    </Row50>


                    <LineGraph info={{ historicalDate, baseCurrencey, exchangeCurrency }} />

                </Fragment>


            )}

            <Row50>
                <Selection monitor={setBaseCurrencey} />
                <Selection monitor={setExchangeCurrency} />
            </Row50>
            <DaySelect monitor={setHistoricalDate} />


        </Fragment >

    )
}

export default Comparison