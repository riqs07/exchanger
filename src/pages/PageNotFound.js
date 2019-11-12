import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'



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
            <h1>404 Page Not found 😢😢💔💔</h1>

            <h3><i>"Don't Stare at money too long, it's  Medusa" --Kanye West</i></h3>

            <Link style={linkStyle} to="/home">Beam me up,Scotty!🏡👽🏡</Link>

        </Fragment>


    )
}

export default PageNotFound