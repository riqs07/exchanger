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


function getHistoricalCurrencyRates(dateString, baseCurrency, conversionCurrency) {
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
            return data

            //data.rates

        })
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

function parseAvailableCurrenncies(obj) {
    const stringArray = Object.values(obj)
    const identifierArray = Object.keys(obj)

    return {
        ids: identifierArray,
        name: stringArray
    }
}


async function compareAllRates() {

    //// NOT WORKING 
    return await getAvailableCurrencies()
        .then(res => console.log(res))
        .then(currencies => parseAvailableCurrenncies(currencies))
        .then(x => console.log(x.ids))

        // .then(x => fetchAllRates(x))
        .then(x => console.log(x))

}

async function fetchAllRates(ids) {
    const requests = ids.map((id) => {
        return getCurrencyExchange('USD', id, 1)
            .then((amount) => {
                return amount
            })
    })
    return Promise.all(requests)
}

async function compareTwoRates(a, b) {
    return await getCurrencyExchange(a, b, 1)
        .then(rate => console.log(rate))
}


async function compareMultipleRates(base, arrayToCompare) {
    // Some sore of UI to select multipls conversions
    // create an array from selection
    // Loop over the compare rates to get the rate %
    // then use that in graph
}




export function prepOptions(obj) {
    let array = []

    for (let [value, label] of Object.entries(obj)) {
        array.push({ value, label })
    }
    return array


}




export async function displayExchangeInfo(baseCurrency, exchangeCurrency, baseAmount, exchangeAmount) {

    // Returns decimal 
    return await getExchangeRate(baseCurrency, exchangeCurrency)
        .then(rate => multiply(baseAmount, rate))
        .then(val => console.log(val))

}


function multiply(num, rate) {
    return num * rate

}

displayExchangeInfo('USD', 'EUR', 5)


function getExchangeRate(baseCurrency, exchangeCurrency) {

    return getCurrencyExchange(baseCurrency, exchangeCurrency, 1)
        .then(data => Object.values(data.rates))
        .then(res => (parseFloat(res[0].rate)))

}


export function getCountryDatabyCurrencyCode(currency) {
    // returns object with ALL countries that use that curency
    return fetch(`https://restcountries.eu/rest/v2/currency/${currency}`)
        .then(res => res.json())

}

function filterByCurrencyCode(item) {
    if (item.currencies[0].code === 'USD') {
        // only working with USD right now
        console.log('This is set to USD at the moment')
    }
}


export function filterResultsbyPopularCurrency(object) {
    // filter results by  obj.currencies[0].code
    // hopefully that first array item is the most popular currency and i can sort 
    // down to  a couple of results 
    object.filter(filterByCurrencyCode)

}





function getCountryDatabyName(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)

}




