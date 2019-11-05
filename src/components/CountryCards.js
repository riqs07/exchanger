import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
 border-radius: 5px;
  padding: 20px 30px;
  background-color: white;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  box-shadow: 0 5px 10px rbga(0, 0, 0, 0.5);
  color: #2e526b;
font-size: 1.5rem;
`


const CountryCards = (props) => {
    const { name, area,
        flag, capital,
        languages, region,
        subregion, population,
        timezones } = props

}


export default CountryCards