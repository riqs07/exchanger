import React from 'react'
import styled from 'styled-components'


const Li = styled.li`
list-style:none;
    `

const Card = styled.div`
padding: 10px 20px;
  margin:10px;
    border:2px solid red ;
  font-family:acumin-pro,sans-serif ;
  border-radius:10px;
 color:#004500  ;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  
`




const PopularTile = (props) => {
    const { currency, rate } = props.info
    console.log('goo')
    console.log(rate)

    return (
        <Card>
            {currency}
            {rate}



        </Card>
    )
}


export default PopularTile