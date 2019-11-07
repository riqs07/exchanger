import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import { getAvailableCurrencies, prepOptions } from '../utils/api';


const CurrencySelect = (props) => {

    const { monitor } = props

    // const [selected, setSelected] = useState()
    const [options, setOptions] = useState()

    // make it cahces in using this hook makes in call infinit
    useEffect(() => {
        getAvailableCurrencies()
            .then(res => prepOptions(res))
            .then(res => setOptions(res))
    }, [])



    const handleSelect = (e) => {
        // setSelected(e.value)
        monitor(e.value)
    }


    return (
        <Select
            onChange={handleSelect}
            options={options}
            placeholder={'Select Currency 💱💱'}
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

