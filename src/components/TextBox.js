import React, { useState } from 'react'

import styled from 'styled-components'

const Text = styled.input`
 border-radius: 5px;
  padding: 10px 15px;
font-size:1.25rem;
  background-color: white;
color:#808080;
border:2px solid #43a047  ;
text-align:center;

:focus {
    border:2px solid #81c784  ;

}
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
            min="0"
            value={value}
            onChange={handleChange}

        />

    )
}

export default TextBox