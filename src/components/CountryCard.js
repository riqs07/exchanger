import React, { Fragment } from 'react'


const CountryCard = (props) => {

    const { name, capital, area, flag,
        population, region, subregion, languages, alpha3Code } = props


    return (
        <Fragment>
            {props.name}
        </Fragment>

    )
}

export default CountryCard
