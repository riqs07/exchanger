import React, { Component, useState, useEffect } from 'react'
import Selection from '../components/Selection';
import Button from '../components/styled/Button';

import TextBox from '../components/TextBox'
import { getAvailableCurrencies, prepOptions, displayExchangeInfo, } from '../utils/api'


// const Exchanger = () => {
//     const [options, setOptions] = useState()
//     const [baseAmount, setBaseAmount] = useState(1)
//     const [baseCurrencey, setBaseCurrencey] = useState('USD')
//     const [exchangeCurrency, setExchangeCurrency] = useState('EUR')
//     const [exchangeAmount, setExchangeAmount] = useState('EUR')


//     useEffect(() => {
//         getAvailableCurrencies()
//             .then(data => fupa(data))
//             .then(data => setOptions(data))
//     })

//     liftValue = (value) => {
//         console.log(value)
//     }



// }

export default class Exchange extends Component {

    // const [baseCurrencey,setBaseCurrency] = useState(1)

    state = {
        options: null,
        baseAmount: null,
        exchangeAmount: null,
        baseCurrencey: null,
        exchangeCurrency: null,

    }

    componentDidMount() {
        getAvailableCurrencies()
            .then(res => prepOptions(res))
            .then(res => {
                this.setState({
                    options: res
                })
            })

    }


    // componentDidUpdate() {
    //     this.setState((state), () => {
    //         console.log('foo')
    //     });
    // }
    setBase(e) {
        // console.log(e)
        this.setState({ baseCurrencey: e })
    }
    setExchange(e) {
        this.setState({ exchangeCurrency: e })
    }
    setBaseAmount(e) {
        if (e > 0) {
            this.setState({ baseAmount: e })
        } else {
            console.log('Add error handle for negative nums')

        }
    }
    setExchangeAmount(e) {
        if (e > 0) {
            this.setState({ exchangeAmount: e })
        } else { console.log('Add error handle for negative nums') }
    }


    setBase = this.setBase.bind(this)
    setExchange = this.setExchange.bind(this)
    setBaseAmount = this.setBaseAmount.bind(this)
    setExchangeAmount = this.setExchangeAmount.bind(this)

    render() {
        return (
            <div>
                <TextBox
                    monitor={this.setBaseAmount}
                />

                <TextBox
                    monitor={this.setExchangeAmount}
                />


                <Selection
                    options={this.state.options}
                    monitor={this.setBase}

                />

                <Selection
                    options={this.state.options}
                    monitor={this.setExchange}
                />



            </div>
        )
    }
}
