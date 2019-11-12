import { Line } from 'react-chartjs-2';
import { getHistoricalExchangeRate } from './api'

function makeDatesArray(historicalDate) {

    let start = new Date(historicalDate)
    let end = new Date()
    let year = start.getFullYear()
    let month = start.getMonth()
    let day = start.getDate()
    let dates = [start]


    while (dates[dates.length - 1] < end) {
        dates.push(new Date(year, month, ++day));
    }

    let datesToSend = dates.map(parseDate)

    return datesToSend
}


// async function fetchAllRates(dates) {
//     const requests = dates.map((date) => {
//         return getHistoricalExchangeRate('USD', id, 1)
//             .then((amount) => {
//                 return amount
//             })
//     })
//     return Promise.all(requests)
// }
// can have have preset value for graph so i dont have to figure it out friom
// within that function
// 1M 6M 1YR 3YR 5YR 10YR 


export function parseDate(date) {
    date = date.toISOString()
    let splits = date.split('T')
    let parsed = splits[0]

    return parsed
}

export async function makeGraph(historicalDate, base, exch) {
    let x = makeDatesArray(historicalDate)

    const requests = x.map((date) => {
        return getHistoricalExchangeRate(date, base, exch)
    })

    return Promise.all(requests)

}

function graph(array) {
    console.log(array)
}