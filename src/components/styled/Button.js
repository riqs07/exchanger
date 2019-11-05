import React from 'react'
import styled from 'styled-components'


const Style = styled.button`
border: 2px solid #408abf;
    background-color: #408abf;
    color: #eee;
    text-decoration: none; 
    display:block;
    font-size: 20px;
  padding: 12px 16px;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin: 10px;
`


const Button = (props) => {
    return (

        <Style>
            {props.text}
        </Style>
    )
}

export default Button