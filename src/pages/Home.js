import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaHome, FaSearchDollar, FaHistory } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'

const Li = styled.li`
list-style:none;
display:inline;
margin-right: 10px;
`

const activeStyle = {
    color: 'red',
}

const icon = {
    paddingRight: '10px',
    color: '#008000',
    size: 50
}
const Home = () => {

    return (


        <Fragment>
            <h1>Fluid.</h1>
            <h3>The currency converter.</h3>
            <Li>
                <NavLink
                    to="/home"
                    exact
                    activeStyle={activeStyle} >

                    <FaHome
                        style={icon} size={icon.size} />

                </NavLink>
            </Li>
            <Li>
                <NavLink
                    to="/exchange"
                    exact
                    activeStyle={activeStyle} >
                    <GiTakeMyMoney
                        style={icon} size={icon.size} />
                </NavLink>
            </Li>
            <Li>
                <NavLink
                    to="/comparison"
                    exact
                    activeStyle={activeStyle}>

                    <FaHistory
                        style={icon} size={icon.size} />

                </NavLink>
            </Li>
            <Li>
                <NavLink
                    to="/currencyFinder"
                    exact
                    activeStyle={activeStyle} >

                    <FaSearchDollar
                        style={icon} size={icon.size} />

                </NavLink>
            </Li>
        </Fragment >


    )
}

export default Home