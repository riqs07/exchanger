import React, { useState, useEffect, Fragment } from 'react'
import { CurrencySelect as Selection } from '../components/Selection';
import Button from '../components/styled/Button'
import TextBox from '../components/TextBox'
import { getExchangeRate } from '../utils/api'

import PopularContainer from '../components/PopularContainer'
import { Row50 as Row } from '../components/styled/Grid'




const Exchange = () => {
    const [baseAmount, setBaseAmount] = useState()
    const [baseCurrencey, setBaseCurrencey] = useState()
    const [exchangeAmount, setExchangeAmount] = useState()
    const [exchangeCurrency, setExchangeCurrency] = useState()
    const [conversionRate, setConversionRate] = useState()

    // small currencyies dont convert to big ones and shows NAN
    // dong to usd 

    // can prob condiotionally render instead of doing check val 
    useEffect(() => {
        const flag = checkVals()
        if (flag === true) {
            getExchangeRate(baseCurrencey, exchangeCurrency)
                .then(rate => setConversionRate(rate))
                .then(getExchangeAmount())
        }

    }, [baseAmount, baseCurrencey, exchangeCurrency, conversionRate])

    const checkVals = () => {
        if (baseAmount !== undefined &&
            baseCurrencey !== undefined &&
            exchangeCurrency !== undefined) {
            return true
        } else { return false }
    }

    const getExchangeAmount = () => {
        // maybe add this to back end and return the total and then have the useeffect render it 
        let total = baseAmount * conversionRate
        setExchangeAmount(total)

    }


    return (
        <div>
            <h1>International Currency Exchange</h1>
            {
                exchangeAmount === undefined ? (
                    <Button text={'Please select a currency!'} />

                ) : (
                        <Fragment>
                            <Button text={`💱 Conversion Rate: ${conversionRate}`} />
                            <Button text={`💲 Exchange Amount : ${exchangeAmount}`} />
                            <PopularContainer info={baseCurrencey} />
                        </Fragment>
                    )
            }

            <Row>
                <TextBox monitor={setBaseAmount} />
            </Row>

            <Row>
                <Selection monitor={setBaseCurrencey} />
                <Selection monitor={setExchangeCurrency} />
            </Row>


        </div>

    )

}

export default Exchange
