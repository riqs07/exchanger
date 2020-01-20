import React from 'react'
import styled from 'styled-components'



const Row50 = styled.div`
display:grid;
grid-template-columns:1fr 1fr;

`

const Row25 = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;

`
const Column50 = styled.div`
display:grid;
grid-template-row:1fr 1fr;

`

const Column25 = styled.div`
display:grid;
grid-template-row:1fr 1fr 1fr 1fr;

`




export { Row50, Row25, Column25, Column50 };