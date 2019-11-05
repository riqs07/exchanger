import React, { useState } from 'react'
import Select from 'react-select';
import { foo } from '../utils/api';


const CurrencySelect = (props) => {

    const { options, monitor } = props

    const [selected, setSelected] = useState('USD')


    const handleSelect = (e) => {
        setSelected(e.value)
        monitor(e.value)
    }


    // async function handleSelect(e) {
    //     await one(e.value)
    //         .then(two)
    // }

    // function one(value) {
    //     return new Promise(function (resolve, reject) {
    //         setSelected(value)
    //         resolve()
    //     })
    // }

    // function two() {
    //     console.log(selected)
    // }



    return (
        <Select
            onChange={handleSelect}
            options={options}
            placeholder={'Select Currency 💱💱'}
            codoe={selected}
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

