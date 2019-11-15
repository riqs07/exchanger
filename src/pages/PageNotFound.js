import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Row50 as Row } from '../components/styled/Grid'



const linkStyle = {
    'background-color': '#008000',
    color: '#eee',
    'text-decoration': 'none',
    'font-size': "35px",
    padding: '12px 16px',
    'border-radius': '4px',
    margin: '10px',


}

const PageNotFound = () => {

    return (

        <Fragment>
            <h1>404 Page Not found 🐻💔💔</h1>

            <Row>
                <Link style={linkStyle} to="/home">🏡</Link>

                <h3><i>"Don't Stare at money too long, it's  Medusa" --Kanye West</i></h3>
            </Row>

        </Fragment>


    )
}

export default PageNotFound