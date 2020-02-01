import React, { useEffect } from 'react'
import styled from 'styled-components'

import { getCountryFlagbyISOCode } from '../utils/api'

const Li = styled.li`
list-style:none;
    `

const Card = styled.div`
padding: 5px 10px;
  margin:5px;
  border:1px solid grey;
  font-family:acumin-pro,sans-serif ;
  border-radius:10px;
 color:#008000  ;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  
`


const flagStyle = {
    height: '30px',
    width: '40px',
    margin: 'auto',

}


// Cant get flag to work.
// Cant find a way to acess outside of useEffect
// I do have the URL though 

const PopularTile = (props) => {
    const { country, rate } = props.info

    let flag


    useEffect(() => {
        getCountryFlagbyISOCode(country[1])
            .then(res => {
                flag = res
                console.log(flag, res)
            })
    }, [])



    return (
        <Card>
            <img src={'https://restcountries.eu/data/gbr.svg'} style={flagStyle} alt={`Flag  for ${country[1]}`} />

            {`${country[0]} \n ${rate}`}

        </Card>
    )
}


export default PopularTile