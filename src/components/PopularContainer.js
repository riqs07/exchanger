import React, { useEffect } from 'react'
import styled from 'styled-components'
import PopularTile from './PopularTile'
import { getExchangeRate } from '../utils/api'


const Grid = styled.ul`
display:flex;
flex-wrap: wrap;
font-size: 20px;
  padding: 12px 16px;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin: 10px;
align-content:center;
border:1px solid #008000;
padding:10px;
`

const Li = styled.li`
list-style:none;
    `
let list = []

const PopularContainer = (props) => {


    // {Country Currency code, Alpha-2 code}
    const baseCurrencey = props.info

    const popularCountries = [['USD', 'USA'], ['GBP', 'GB'], ['CAD', 'CA'], ['MXN', 'MX'], ['AUD', 'AU'], ['CNY', 'CN']]


    useEffect(() => {

        if (list.length === 0) {
            popularCountries.forEach(country => {
                getExchangeRate(baseCurrencey, country[0])
                    .then(rate => list.push({ country, rate }))


            })
        } else if (list.length > 0) {

            list = list.splice(list.length)
            popularCountries.forEach(country => {
                getExchangeRate(baseCurrencey, country[0])
                    .then(rate => list.push({ country, rate }))

            })
        }

    }, [baseCurrencey])

    return (
        <Grid>
            {list.map(country => {
                return (
                    <Li key={country.currency} >
                        <PopularTile info={country} />
                    </Li>
                )
            })}
        </Grid>
    )


}


export default PopularContainer