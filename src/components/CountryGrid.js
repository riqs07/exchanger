import React, { Fragment } from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard';


const Grid = styled.div`
outline:2px solid red;
`

const img = {
    height: '200px',
    width: '200px'
}
/// has to do with how to props are being passed in 
// add a loading component 

const CountryGrid = (props) => {
    const { countries } = props
    console.log(countries)
    return (
        <Grid>

            <ul>

                {countries.map(country => {
                    return (
                        <li key={country.alpha3Code}>

                            <CountryCard info={country} />
                        </li>

                    )
                })}
            </ul>
        </Grid>
    )
}


export default CountryGrid