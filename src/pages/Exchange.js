import React, { useState, useEffect, Fragment } from 'react'
import Selection from '../components/Selection';
import Button from '../components/styled/Button'
import TextBox from '../components/TextBox'
import BarGraph from '../components/graphs/Bar'
import { getExchangeRate } from '../utils/api'
import styled from 'styled-components'
import { Row50 as Row } from '../components/styled/Grid'






const Exchange = () => {
    const [baseAmount, setBaseAmount] = useState()
    const [baseCurrencey, setBaseCurrencey] = useState()
    const [exchangeCurrency, setExchangeCurrency] = useState()
    const [exchangeAmount, setExchangeAmount] = useState()
    const [conversionRate, setConversionRate] = useState()

    // small currencyies dont convert to big ones and shows NAN
    // dong to usd 
    // error on two of the same currenct
    // text box dosent update automatically on select change 

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

    const setBaseNum = (e) => {
        e > 0 ? setBaseAmount(e)
            : console.log('Add error handle for negative nums')
    }

    const setExchangeNum = (e) => {
        e > 0 ? setExchangeAmount(e)
            : console.log('Add error handle for negative nums')
    }

    // want it to work both ways a la the google one 
    // so you can change the base and exchange currencies and it will update


    return (
        <div>


            <h1>International Currency Exchange</h1>



            {
                exchangeAmount === undefined ? (
                    <Button text={'💱'} />

                ) : (
                        <Fragment>
                            <Button text={`💱 Conversion Rate: ${conversionRate}`} />
                            {/* <Button text={`The conversion rate is ${conversionRate}.
                    For every 1 ${baseCurrencey} you get ${conversionRate} of
                    ${exchangeCurrency}
                    `} /> */}
                            <BarGraph info={{ baseCurrencey, exchangeCurrency, conversionRate }} />


                        </Fragment>
                    )
            }


            <Row>
                <TextBox monitor={setBaseNum} />
                <TextBox monitor={setExchangeNum} />
            </Row>

            <Row>
                <Selection monitor={setBaseCurrencey} />

                <Selection monitor={setExchangeCurrency} />
            </Row>
        </div>

    )

}

export default Exchange
