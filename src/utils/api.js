
const api = 'https://currency-converter5.p.rapidapi.com/currency/'
const json = `?format=json`
const apiHost = 'currency-converter5.p.rapidapi.com'
const apiKey = 'ea54adc6e3msh4413ce3bd4a371bp1cfbd7jsn3cc8ce958bf0'


function getCurrencyExchange(baseCurrency, conversionCurrency, amount) {
    return fetch(`${api}convert${json}&from=${baseCurrency}&to=${conversionCurrency}&amount=${amount}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": `${apiHost}`,
            "x-rapidapi-key": `${apiKey}`
        }
    }).then(res => res.json())
        .then(data => {
            if (data.messaage) {
                throw new Error(console.log('error'))

            }
            return data

        })
}


export function getHistoricalCurrencyRates(dateString, baseCurrency, conversionCurrency) {
    // Date String format : YYYY-MM-DD
    return fetch(`${api}historical/${dateString}${json}&to=${conversionCurrency}&from=${baseCurrency}&${1}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "ea54adc6e3msh4413ce3bd4a371bp1cfbd7jsn3cc8ce958bf0"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.error) {
                throw new Error(console.log(data.error.message))
            }
            return data.rates
        })
}


export async function getHistoricalExchangeRate(date, baseCurrency, exchangeCurrency) {
    // Date String format : YYYY-MM-DD
    return getHistoricalCurrencyRates(date, baseCurrency, exchangeCurrency)
        .then(data => Object.values(data))
        .then(res => (parseFloat(res[0].rate)))
}



export function getAvailableCurrencies() {
    return fetch(`${api}list${json}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": `${apiHost}`,
            "x-rapidapi-key": `${apiKey}`
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                throw new Error(console.log(data.error.messaage))

            }
            return data.currencies

        })
}



export function prepOptions(obj) {
    let array = []

    for (let [value, label] of Object.entries(obj)) {
        array.push({ value, label })
    }
    return array


}


export async function getExchangeRate(baseCurrency, exchangeCurrency) {
    return getCurrencyExchange(baseCurrency, exchangeCurrency, 1)
        .then(data => Object.values(data.rates))
        .then(res => (parseFloat(res[0].rate)))

}


export function getCountryDatabyCurrencyCode(currency) {
    // returns object with ALL countries that use that curency
    return fetch(`https://restcountries.eu/rest/v2/currency/${currency}`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                throw new Error(console.log(data.error.message))
            }
            return data
        })

}





