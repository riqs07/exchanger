import { getHistoricalExchangeRate } from './api'

export function makeDatesArray(dateRange) {

    let start = new Date(dateRange[0])
    let end = new Date(dateRange[1])
    let year = start.getFullYear()
    let month = start.getMonth()
    let day = start.getDate()
    let dates = []


    while (dates.length < 1 || dates[dates.length - 1] < end) {
        dates.push(new Date(year, month, day++));
    }

    let datesToSend = dates.map(parseDate)

    return datesToSend
}


export function parseDate(date) {
    date = date.toISOString()
    let splits = date.split('T')
    let parsed = splits[0]

    return parsed
}




// Trying to get the labels and the actual content to match the new delimited array 

export async function makeGraph(dateRange, base, exch, preset) {

    // feel like this is a sloppy solution 
    // feel like passing in default is meh 
    if (preset === 'default') {
        let x = makeDatesArray(dateRange)
        const requests = x.map((date) => {
            return getHistoricalExchangeRate(date, base, exch)
        })

        return Promise.all(requests)

    } else {

        let x = getPresetDateRange(dateRange, preset)

        const requests = x.map((date) => {
            return getHistoricalExchangeRate(date, base, exch)
        })

        return Promise.all(requests)
    }



}


/// The thing is with these presets is that it should take in just the start date and 
// go back a set amount of time while also using the delimeter to go faster
// should work when i go back 



/// i think this need to happen before it gets passed into the line graph 
/// taht way the labels update
export function getPresetDateRange(dateRange, preset) {

    console.log(preset)

    let datesArray = makeDatesArray(dateRange)
    let parsedArray = []
    let delimeter

    switch (preset) {

        case '6m':
            delimeter = 2
            break;

        case '12m':
            // 1 year
            delimeter = 5
            break;

        case '36m':
            // 3 years
            delimeter = 10
            break;

        case '60m':
            // 5 years
            delimeter = 20
            break;

        case '120m':
            // 10 years
            delimeter = 50
            break;
    }


    for (let index = 0; index < datesArray.length; index++) {
        if (index % delimeter === 0) {
            parsedArray.push(datesArray[index])
        }
    }
    return parsedArray
}




