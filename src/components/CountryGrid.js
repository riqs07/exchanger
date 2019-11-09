import React from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard';


// only if more than one 
// if one then show the Country card 
// else organize into a grid where user can then click and 
// pill up full screen of country info
const Grid = styled.div`
`

/// has to do with how to props are being passed in 
// add a loading component 

const CountryGrid = (props) => {
    const { countries } = props

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