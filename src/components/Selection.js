import React, { Component } from 'react'
import { } from '../utils/api'

import styled from 'styled-components'

const Select = styled.select`
 border-radius: 5px;
  padding: 20px 30px;
  background-color: white;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  box-shadow: 0 5px 10px rbga(0, 0, 0, 0.5);
  color: #2e526b;
font-size: 1.5rem;
`

export default class Selection extends Component {

    state = {
        ids: ["USD", "CAN", "GBP", "YEN"]
    }



    render() {
        return (
            <div>
                <Select>
                    {
                        this.state.ids.map(id => {
                            return (
                                <option key={id} value={id}>
                                    {id}
                                </option>
                            )
                        })
                    }
                </Select>

            </div>
        )
    }
}
