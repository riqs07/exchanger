import React, { useState } from 'react'
import { } from '../utils/api'

import styled from 'styled-components'

const Text = styled.input`
 border-radius: 5px;
  padding: 20px 30px;
  background-color: white;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  box-shadow: 0 5px 10px rbga(0, 0, 0, 0.5);
  color: #2e526b;
  width:4rempx;
font-size: 1.5rem;
`



const TextBox = (props) => {
    const { monitor } = props

    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        setValue(e.target.value)
        monitor(parseInt(e.target.value))

    }


    return (

        <Text
            type='number'
            value={value}
            onChange={handleChange}

        >

        </Text>

    )
}

export default TextBox