import React from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard';


// only if more than one 
// if one then show the Country card 
// else organize into a grid where user can then click and 
// pill up full screen of country info
const Grid = styled.ul`
display:flex;
align-content:center;

flex-wrap: wrap;
`

const Li = styled.li`
list-style:none;
flex-basis: 25%;
    `


// add a loading component 

const CountryGrid = (props) => {
    const { countries } = props

    return (
        <Grid>
            {countries.map(country => {
                return (

                    <Li key={country.alpha3Code}>
                        <CountryCard info={country} />
                    </Li>
                )
            })}

        </Grid>
    )
}

export default CountryGrid