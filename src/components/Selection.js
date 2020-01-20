import React, { useState, useEffect, Fragment } from 'react'

import Select from 'react-select';
import { getAvailableCurrencies, prepOptions } from '../utils/api';
import Button from './styled/Button';


const CurrencySelect = (props) => {

    const { monitor } = props

    const [options, setOptions] = useState()

    const [selected, setSelected] = useState()

    useEffect(() => {
        getAvailableCurrencies()
            .then(res => prepOptions(res))
            .then(res => setOptions(res))
    }, [])


    const handleSelect = (e) => {
        setSelected(e.value)
        monitor(e.value)
    }


    return (
        <Select
            onChange={handleSelect}
            options={options}
            placeholder={'Select a Currency 💱💱'}
        />

    )
}



const MultiCurrencySelect = (props) => {

    // find a way top have state hold multiple values 
    const [options, setOptions] = useState()
    const [selected, setSelected] = useState([])
    const { monitor } = props

    useEffect(() => {
        getAvailableCurrencies()
            .then(res => prepOptions(res))
            .then(res => setOptions(res))
    }, [])


    const handleSelect = (e) => {
        const newValue = e.map(x => x.value)
        setSelected(newValue)
        monitor(newValue)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Run Multi graph function ')
        // function that sets array of compairison page to selected
        monitor(selected)

    }

    return (
        // going to need to find a way to limit the amount of inputs
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Select isMulti
                    options={options}
                    onChange={handleSelect}

                />
                <input type="submit" value="Submit" />
            </form>
        </Fragment>




    )
}


export { CurrencySelect, MultiCurrencySelect }

