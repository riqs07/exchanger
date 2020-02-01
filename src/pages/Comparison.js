import React, { useState, useEffect, Fragment } from 'react'
import { StartDateSelect, EndDateSelect } from '../components/DatePicker'
import { CurrencySelect as Selection } from '../components/Selection';
import { getHistoricalExchangeRate } from '../utils/api'
import LineGraph from '../components/graphs/Line'
import { Row50 } from '../components/styled/Grid'
import { getPresetDateRange } from '../utils/graphs'
import styled from 'styled-components'

import Button from '../components/styled/Button';


const Grid = styled.div`
display:flex;
align-content:center;

flex-wrap: wrap;
`



const Comparison = () => {
    const [baseCurrencey, setBaseCurrencey] = useState()
    const [exchangeCurrency, setExchangeCurrency] = useState()
    const [historicalStartDate, setHistoricalStartDate] = useState()
    const [historicalEndDate, setHistoricalEndDate] = useState()

    // const [historicalRate, setHistoricalRate] = useState()
    const [dateRange, setDateRange] = useState()
    const [preset, setPreset] = useState('default')


    useEffect(() => {
        setDateRange([historicalStartDate, historicalEndDate])

    }, [historicalStartDate, historicalEndDate,])


    const setPresets = (e) => {
        setPreset(e.target.value)
    }

    const checkVals = () => {
        if (baseCurrencey !== undefined &&
            exchangeCurrency !== undefined) {
            return true
        } else { return false }
    }

    let flag = checkVals()
    // really dont like this as a solution to get the presets to render but i cant find a way to get it to render based on two condtions 

    const inverseCurrencies = () => {
        let x = baseCurrencey

        setBaseCurrencey(exchangeCurrency)
        setExchangeCurrency(x)

        console.log('find a way for invers to go on select boxes')
    }


    // Maybe make line graph accept an array?
    // and have that date range array live in state?

    return (
        <Fragment >

            <h1>Historical Data Comparison</h1>

            {flag && (
                <Fragment>

                    <Button text={`Range from ${dateRange[0]} to ${dateRange[1]}`} />

                    <LineGraph info={{ dateRange, baseCurrencey, exchangeCurrency, preset }} />

                    <Grid>
                        <Button onClick={setPresets} value={'6m'} text='6m' />
                        <Button onClick={setPresets} value={'12m'} text='1y' />
                        <Button onClick={setPresets} value={'36m'} text='3y' />
                        <Button onClick={setPresets} value={'60m'} text='5y' />
                        <Button onClick={setPresets} value={'120m'} text='Max' />
                        <Button onClick={inverseCurrencies} text='Inverse 🔀' />

                    </Grid>

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

        </Fragment >



    )
}

export default Comparison