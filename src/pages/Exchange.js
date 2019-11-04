import React, { Component } from 'react'
import Selection from '../components/Selection';
import TextBox from '../components/TextBox'
import { getAvailableCurrencies, fupa, getCountryDatabyCurrencyCode, filterResultsbyPopularCurrency } from '../utils/api'

export default class Exchange extends Component {

    state = {
        options: null
    }

    componentDidMount() {
        getAvailableCurrencies()
            .then(res => fupa(res))
            .then(res => {
                this.setState({
                    options: res
                })
            })

    }

    test(e) {
        getCountryDatabyCurrencyCode(e.value)
            .then(res => filterResultsbyPopularCurrency(res))
    }

    render() {
        return (
            <div>
                <TextBox />
                <TextBox />
                <Selection options={this.state.options} test={this.test} />
                <Selection options={this.state.options} test={this.test} />

            </div>
        )
    }
}
