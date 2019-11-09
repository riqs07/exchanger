import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaHome, FaSearchDollar, FaHistory } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'

//Button Nav && Theme Select

const activeStyle = {
    color: 'red'
}

const Li = styled.li`
list-style:none;
display:inline;
`

const Style = styled.nav`
background-color:blue;
width:100vw;
height:5vh;
`


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
                                color='rgb(194,57,42)' size={26} />

                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink
                            to="/exchange"
                            exact
                            activeStyle={activeStyle} >
                            <GiTakeMyMoney
                                color='rgb(194,57,42)' size={26} />
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink
                            to="/comparison"
                            exact
                            activeStyle={activeStyle}>

                            <FaHistory
                                color='rgb(194,57,42)' size={26} />

                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink
                            to="/currencyFinder"
                            exact
                            activeStyle={activeStyle} >

                            <FaSearchDollar
                                color='rgb(194,57,42)' size={26} />

                        </NavLink>
                    </Li>

                </ul>
            </Style>
        )
    }
}
