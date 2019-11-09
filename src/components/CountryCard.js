import React from 'react'
import styled from 'styled-components'

import { FaRegStar, FaMapMarkedAlt, FaMapPin } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { MdOpenWith } from 'react-icons/md'


const flagStyle = {
    height: '400px',
    width: '600px',
    outline: '1px solid grey'
}

const Li = styled.li`
list-style:none;
    `

const Style = styled.div`
textalign:center;


`


const CountryCard = (countries) => {

    const { name, capital, area, flag,
        population, region, subregion } = countries.info


    return (
        <Style>
            <img src={flag} style={flagStyle} alt={`Flag  for${name}`} />
            <h1>{name}</h1>
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
                <Li>
                    <FaMapPin color='rgb(194,57,42)' size={26} />
                    {subregion}
                </Li>


            </ul>



        </Style>

    )
}


// also make a small previwe version that shows the bigger version of the card with a bit more info but then i want a small version to show on the grid as well as whenever i select a currency elsewhere like on the historical excchange page like have them bnoth show up in the direct heead to head compariosn and what not and 
export default CountryCard
