import React, { useState, useEffect, Fragment } from 'react'
import Selection from '../components/Selection';
import { getCountryDatabyCurrencyCode } from '../utils/api'
import CountryGrid from '../components/CountryGrid'
import CountryCard from '../components/CountryCard';



const CurrencyFinder = () => {
    // currently crasshes without a default currency 
    const [currency, setCurrency] = useState('ALL')
    const [countries, setCountries] = useState([])

    // dont render on first load 
    useEffect(() => {
        getCountryDatabyCurrencyCode(currency)
            .then(res => setCountries(res))
    }, [currency])


    console.log(countries, countries[0])
    // {
    // countries.length > 1
    //     ? console.log('Grid')
    //     : <CountryCard countries={countries[0]} />
    // }

    // do big card if just one do grid if more than one



    return (
        <Fragment>
            <h2>Which Countries use which currencies? </h2>
            <Selection monitor={setCurrency} />

            <CountryGrid countries={countries} />

        </Fragment>
    )
}

export default CurrencyFinder