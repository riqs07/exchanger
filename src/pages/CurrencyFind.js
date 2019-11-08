import React, { useState, useEffect, Fragment } from 'react'
import Selection from '../components/Selection';
import { getCountryDatabyCurrencyCode } from '../utils/api'
import CountriesGrid from '../components/CountryGrid'



const CurrencyFinder = () => {
    const [currency, setCurrency] = useState('GBP')
    const [countries, setCountries] = useState([])


    useEffect(() => {
        getCountryDatabyCurrencyCode(currency)
            .then(res => setCountries(res))
    }, [currency])

    return (
        <Fragment>
            <Selection monitor={setCurrency} />
            <CountriesGrid countries={countries} />
        </Fragment>
    )
}

export default CurrencyFinder