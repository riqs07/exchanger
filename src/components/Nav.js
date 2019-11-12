import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaHome, FaSearchDollar, FaHistory } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'

//Button Nav && Theme Select

const activeStyle = {
    color: 'red',
}

const Li = styled.li`
list-style:none;
display:inline;
margin-right: 10px;
`

const Style = styled.nav`
    margin:0px;
background-color:#008000;
height:5vh;
`


const icon = {
    paddingRight: '10px',
    color: '#efefef',
    size: 35
}


export default class Nav extends Component {
    render() {
        return (
            <Style>
                <ul>
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

                </ul>
            </Style>
        )
    }
}
