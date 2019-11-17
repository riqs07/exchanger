import React, { useState, useEffect, Fragment } from 'react'
import { CurrencySelect as Selection } from '../components/Selection';
import { getCountryDatabyCurrencyCode } from '../utils/api'
import CountryGrid from '../components/CountryGrid'



const CurrencyFinder = () => {
    // currently crasshes without a default currency 
    const [currency, setCurrency] = useState('AUD')
    const [countries, setCountries] = useState([])

    // dont render on first load 
    useEffect(() => {
        getCountryDatabyCurrencyCode(currency)
            .then(res => setCountries(res))
    }, [currency])


    return (

        <Fragment>
            <h2>Which Countries use which currencies? </h2>
            <Selection monitor={setCurrency} />

            <CountryGrid countries={countries} />

        </Fragment>


    )
}

export default CurrencyFinder