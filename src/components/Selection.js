import React, { useState } from 'react'
import { getAvailableCurrencies, fupa } from '../utils/api'
import Select from 'react-select';


const CurrencySelect = (props) => {

    const [selected, setSelected] = useState()

    const handleChange = (e) => {
        setSelected(e.value)
        props.test(e)
    }

    return (
        <Select
            onChange={handleChange}
            options={props.options}
        />

    )
}

const MultiCurrencySelect = (props) => {

    // find a way top have state hold multiple values 

    return (
        // going to need to find a way to limit the amount of inputs
        <Select isMulti
            options={props.options}

        />

    )
}


export default CurrencySelect

