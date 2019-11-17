import { getHistoricalExchangeRate } from './api'

export function makeDatesArray(historicalDate) {

    let start = new Date(historicalDate)
    let end = new Date()
    let year = start.getFullYear()
    let month = start.getMonth()
    let day = start.getDate()
    let dates = []


    while (dates.length < 1 || dates[dates.length - 1] < end) {
        dates.push(new Date(year, month, day++));
    }

    let datesToSend = dates.map(parseDate)


    // pass in an amount of days to increment by 5D 10D 20D 
    // inside while loop only push the one that goes up by increment 
    // push final value

    // while (dates[dates.lengthlength] !== end){
    //     dates.push(new Date(year, month, ++day));

    // }

    return datesToSend
}


export function parseDate(date) {
    date = date.toISOString()
    let splits = date.split('T')
    let parsed = splits[0]

    return parsed
}

export async function makeGraph(historicalDate, base, exch) {
    let x = makeDatesArray(historicalDate)
    console.log(x)

    const requests = x.map((date) => {
        return getHistoricalExchangeRate(date, base, exch)
    })

    return Promise.all(requests)

}


export async function makeGraph2(historicalDate, base, exch) {
    let x = makeDatesArray(historicalDate)

    const requests = x.map((date) => {
        return getHistoricalExchangeRate(date, base, exch)
    })

    return requests



}




export async function multiGraph(historicalDate, base, array) {

    return await array.forEach(currency => makeGraph2(historicalDate, base, currency)
        .then()
    )



    // console.log(array, xx)

    // for each exhcange rate prep its onw line 
    // let xx = array.map(x => makeGraph(historicalDate, base, `${x}`))
    // return await xx
}

