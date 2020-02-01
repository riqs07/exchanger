import React, { useState, useEffect } from 'react'

import Select from 'react-select';
import { getAvailableCurrencies, prepOptions } from '../utils/api';


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

export { CurrencySelect, }

