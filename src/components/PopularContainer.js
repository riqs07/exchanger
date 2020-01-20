
import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import PopularTile from './PopularTile'
import { getExchangeRate } from '../utils/api'



const Grid = styled.ul`
display:flex;
align-content:center;
border-radius:5%;
border:2px solid black;
padding:10px;
`

const Li = styled.li`
list-style:none;
    `





const PopularContainer = (props) => {

    const baseCurrencey = props.info
    // cant get this to work the right way with destructuring 
    // working but firing like three times

    const [isLoading, setLoading] = useState()
    const [list, setList] = useState([])


    const popular = ['USD', 'EUR', 'GBP', 'CAD', 'MXN', 'AUD', 'CNY']



    useEffect(() => {
        setLoading(true)
        popular.forEach(currency => {
            getExchangeRate(baseCurrencey, currency)
                .then(rate => list.push({ currency, rate }))
                .then(setLoading(false))

        })

    }, [baseCurrencey])

    if (!isLoading) {
        return (
            <Grid>
                {list.map(object => {
                    return (
                        <Li key={object.currency}>
                            <PopularTile info={object} />
                        </Li>
                    )
                })}
            </Grid>
        )

    }
}


export default PopularContainer