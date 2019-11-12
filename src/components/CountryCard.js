import React from 'react'
import styled from 'styled-components'
import { FaRegStar, FaMapMarkedAlt, FaMapPin } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { MdOpenWith } from 'react-icons/md'


const flagStyle = {
    height: '200px',
    width: '300px',
    align: 'center'
}

const hrefStyle = {
    textDecoration: 'none',
    fontSize: '1.5em',
    color: 'blue',
    display: 'block',
    textAlign: 'center',
    marginBottom: '10px'

}

const Li = styled.li`
list-style:none;
    `

const Card = styled.div`
padding: 10px 20px;
  margin:10px;
    border-style:solid;
  font-family:serif;
  border-radius:10px;
  background-color:#fff8dc;
`



const CountryCardSm = (countries) => {
    const { name, capital, area, flag,
        population, region, subregion } = countries.info

    return (

        <Card>
            <img src={flag} style={flagStyle} alt={`Flag  for ${name}`} />
            <a href={`https://en.wikipedia.org/wiki/${name}`} target={'_blank'} style={hrefStyle} >{name}</a>
            <ul>
                {capital && (
                    <Li>
                        <FaRegStar color='rgb(194,57,42)' size={26} />

                        {capital}
                    </Li>
                )}


                {area && (
                    <Li>
                        <MdOpenWith color='rgb(194,57,42)' size={26} />
                        {area.toLocaleString()} ft<sup>2</sup>
                    </Li>
                )}


                <Li>
                    <IoIosPeople color='rgb(194,57,42)' size={26} />
                    {population.toLocaleString()}
                </Li>

                <Li>
                    <FaMapMarkedAlt color='rgb(194,57,42)' size={26} />
                    {region}
                </Li>

                {subregion && (
                    <Li>
                        <FaMapPin color='rgb(194,57,42)' size={26} />
                        {subregion}

                    </Li>

                )}


            </ul>

        </Card>

    )
}


export default CountryCardSm