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
            return data.rates

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



function getAvailableCurrencies() {
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

function parseAvailableCurrenncies(obj, type) {

    let identifierArray = []
    let stringArray = []

    for (let [identifier, string] of Object.entries(obj)) {
        identifierArray.push(identifier)
        stringArray.push(string)
    }

    switch (type) {
        case 'string':
            return stringArray
            break;

        case 'id':
            return identifierArray
            break;
    }
}


async function compareAllRates() {
    let x = await getAvailableCurrencies()
        .then(x => parseAvailableCurrenncies(x, 'id'))
        .then(x => fetchAllRates(x))
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
    let x = await getCurrencyExchange(a, b, 1)
        .then(rate => console.log(rate))
}


async function compareMultipleRates(base, arrayToCompare) {
    // Some sore of UI to select multipls conversions
    // create an array from selection
    // Loop over the compare rates to get the rate %
    // then use that in graph
}



compareTwoRates('PLN', 'USD')
compareAllRates()