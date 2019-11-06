import React, { Component, useState, useEffect } from 'react'
import Selection from '../components/Selection';
import Button from '../components/styled/Button';

import TextBox from '../components/TextBox'
import { getAvailableCurrencies, prepOptions, displayExchangeInfo, } from '../utils/api'


const Exchange = () => {
    const [baseAmount, setBaseAmount] = useState()
    const [baseCurrencey, setBaseCurrencey] = useState()
    const [exchangeCurrency, setExchangeCurrency] = useState()
    const [exchangeAmount, setExchangeAmount] = useState()

    console.log(baseCurrencey, exchangeCurrency)

    useEffect((baseAmount, baseCurrencey, exchangeCurrency, exchangeAmount) => {

        displayExchangeInfo(baseCurrencey, exchangeCurrency, 1, exchangeAmount)
    }, [exchangeCurrency])

    const setBase = (e) => setBaseCurrencey(e)
    const setExchange = (e) => setExchangeCurrency(e)


    const setBaseNum = (e) => {
        if (e > 0) {
            setBaseAmount(e)
        } else {
            console.log('Add error handle for negative nums')

        }
    }

    const setExchangeNum = (e) => {
        if (e > 0) {
            setExchangeAmount(e)
        } else {
            console.log('Add error handle for negative nums')
        }
    }


    return (
        <div>
            <TextBox monitor={setBaseNum} />

            <TextBox monitor={setExchangeNum} />

            <Selection monitor={setBase} />

            <Selection monitor={setExchange} />



        </div>
    )

}

export default Exchange

// class Exchanger extends Component {

//     // const [baseCurrencey,setBaseCurrency] = useState(1)

//     state = {
//         options: null,
//         baseAmount: null,
//         exchangeAmount: null,
//         baseCurrencey: null,
//         exchangeCurrency: null,

//     }

//     // componentDidMount() {
//     //     getAvailableCurrencies()
//     //         .then(res => prepOptions(res))
//     //         .then(res => {
//     //             this.setState({
//     //                 options: res
//     //             })
//     //         })

//     // }


//     // useEffect(() => {
//     //     console.log('goo')
//     // })


//     setBase(e) {
//         // console.log(e)
//         this.setState({ baseCurrencey: e })
//     }
//     setExchange(e) {
//         this.setState({ exchangeCurrency: e })
//     }
//     setBaseAmount(e) {
//         if (e > 0) {
//             this.setState({ baseAmount: e })
//         } else {
//             console.log('Add error handle for negative nums')

//         }
//     }
//     setExchangeAmount(e) {
//         if (e > 0) {
//             this.setState({ exchangeAmount: e })
//         } else { console.log('Add error handle for negative nums') }
//     }


//     setBase = this.setBase.bind(this)
//     setExchange = this.setExchange.bind(this)
//     setBaseAmount = this.setBaseAmount.bind(this)
//     setExchangeAmount = this.setExchangeAmount.bind(this)

//     render() {
//         return (
//             <div>
//                 <TextBox
//                     monitor={this.setBaseAmount}
//                 />

//                 <TextBox
//                     monitor={this.setExchangeAmount}
//                 />


//                 <Selection
//                     monitor={this.setBase}

//                 />

//                 <Selection
//                     monitor={this.setExchange}
//                 />



//             </div>
//         )
//     }
// }
