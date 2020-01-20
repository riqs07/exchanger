import React, { useState, useEffect, Fragment } from 'react'
import { StartDateSelect, EndDateSelect } from '../components/DatePicker'
import { CurrencySelect as Selection, MultiCurrencySelect } from '../components/Selection';
import { getHistoricalExchangeRate } from '../utils/api'
import LineGraph from '../components/graphs/Line'
import { Row25, Row50 } from '../components/styled/Grid'
import Button from '../components/styled/Button';





const Comparison = () => {
    const [baseCurrencey, setBaseCurrencey] = useState()
    const [exchangeCurrency, setExchangeCurrency] = useState()
    const [historicalStartDate, setHistoricalStartDate] = useState()
    const [historicalEndDate, setHistoricalEndDate] = useState()

    const [historicalRate, setHistoricalRate] = useState()
    const [multiExchange, arrayForMultiExchange] = useState()
    const [loading, setLoading] = useState(false)

    // dont even think i need to add the historical rate
    //i think its an artifact from before i had the graphs implmented 
    useEffect(() => {
        const flag = checkVals()
        if (flag === true) {
            getHistoricalExchangeRate(historicalStartDate, baseCurrencey, exchangeCurrency)
                .then(rate => setHistoricalRate(rate))
        }
    }, [baseCurrencey, exchangeCurrency, historicalStartDate])



    const checkVals = () => {
        if (baseCurrencey !== undefined &&
            exchangeCurrency !== undefined) {
            return true
        } else { return false }
    }

    const foo = () => {
        console.log('show line graph over time ')
    }


    const inverseCurrencies = () => {
        let x = baseCurrencey

        setBaseCurrencey(exchangeCurrency)
        setExchangeCurrency(x)

        console.log('find a way for invers to go on select boxes')
    }

    return (
        <Fragment >

            <h1>Historical Date Comparison</h1>

            {historicalRate && (
                <Fragment>
                    <Row50>

                        <Button text={historicalStartDate} />
                        <Button text={historicalRate} />

                    </Row50>
                    <LineGraph info={{ historicalStartDate, historicalEndDate, baseCurrencey, exchangeCurrency }} />
                    <Button onClick={inverseCurrencies} text='Inverse 🔀' />

                </Fragment>

            )}

            <Row50>
                <Selection monitor={setBaseCurrencey} />
                <Selection monitor={setExchangeCurrency} />
            </Row50>

            <Row50>
                <StartDateSelect monitor={setHistoricalStartDate} />
                <EndDateSelect monitor={setHistoricalEndDate} />
            </Row50>

            < Fragment >
                <Row50>
                    {baseCurrencey && (
                        <Button onClick={foo} text={`Show rate for ${baseCurrencey} over time`} />

                    )}
                    {exchangeCurrency && (
                        <Button onClick={foo} text={`Show rate for ${exchangeCurrency} over time`} />

                    )}
                </Row50>

            </Fragment>



        </Fragment >



    )
}

export default Comparison