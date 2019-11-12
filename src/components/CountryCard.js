import React from 'react'
import styled from 'styled-components'
import { FaRegStar, FaMapMarkedAlt, FaMapPin } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { MdOpenWith } from 'react-icons/md'


const flagStyle = {
    height: '200px',
    width: '300px',
    align: 'center',
    border: '1px solid #d3d3d3'
}

const hrefStyle = {
    textDecoration: 'none',
    fontSize: '1.5em',
    color: '#1b5e20 ',
    display: 'block',
    textAlign: 'center',
    marginBottom: '10px',
    fontfamily: 'Roboto'



}

const icon = {
    paddingRight: '10px',
    color: 'rgb(194,57,42)',

    size: 26
}

const Li = styled.li`
list-style:none;
    `

const Card = styled.div`
padding: 10px 20px;
  margin:10px;
    border:2px solid #d3d3d3 ;
  font-family:acumin-pro,sans-serif ;
  border-radius:10px;
 color:#004500  ;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  
`



const CountryCardSm = (countries) => {
    const { name, capital, area, flag,
        population, region, subregion } = countries.info

    return (

        <Card>
            <a href={`https://en.wikipedia.org/wiki/${name}`} target={'_blank'}>
                <img src={flag} style={flagStyle} alt={`Flag  for ${name}`} />
            </a>
            <a href={`https://en.wikipedia.org/wiki/${name}`} target={'_blank'} style={hrefStyle} >{name}</a>
            <ul>
                {capital && (
                    <Li>
                        <FaRegStar style={icon} size={icon.size} />

                        {capital}
                    </Li>
                )}


                {area && (
                    <Li>
                        <MdOpenWith style={icon} size={icon.size} />
                        {area.toLocaleString()} ft<sup>2</sup>
                    </Li>
                )}


                <Li>
                    <IoIosPeople style={icon} size={icon.size} />
                    {population.toLocaleString()}
                </Li>

                <Li>
                    <FaMapMarkedAlt style={icon} size={icon.size} />
                    {region}
                </Li>

                {subregion && (
                    <Li>
                        <FaMapPin style={icon} size={icon.size} />
                        {subregion}

                    </Li>

                )}


            </ul>

        </Card>

    )
}


export default CountryCardSm