import { getHistoricalExchangeRate } from './api'
import { parse } from 'date-fns/fp';

export function makeDatesArray(dateRange) {

    let start = new Date(dateRange[0])
    let end = new Date(dateRange[1])

    console.log(start, end)
    let year = start.getFullYear()
    let month = start.getMonth()
    let day = start.getDate()
    let dates = []


    while (dates.length < 1 || dates[dates.length - 1] < end) {
        dates.push(new Date(year, month, day++));
    }


    let datesToSend = dates.map(parseDateToString)

    return datesToSend
}


export function parseDateToString(date) {
    date = date.toISOString()
    let splits = date.split('T')
    let parsed = splits[0]

    return parsed
}


function dateFromString(date) {
    let splits = date.split('-')
    let year = splits[0]
    let month = splits[1]
    let day = splits[2]

    let d = new Date(year, month, day)

    return d;


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
export function getPresetDateRange(range, preset) {

    let endDate = goBackFromDate(range[0], preset)

    let dateRange = [range[0], endDate]

    let datesArray = makeDatesArray(dateRange)

    console.log(range, dateRange, datesArray)

    let parsedArray = []
    let delimeter

    switch (preset) {

        case 1:
            delimeter = 2
            break;

        case 3:
            delimeter = 5
            break;

        case 5:
            delimeter = 10
            break;

        case 10:
            delimeter = 40
            break;


    }


    for (let index = 0; index < datesArray.length; index++) {
        if (index % delimeter === 0) {
            parsedArray.push(datesArray[index])
        }
    }

    console.log(parsedArray)
    return parsedArray
}



function goBackFromDate(dateString, length) {

    /// take date stirng and convert 
    let endDate = dateFromString(dateString)

    endDate = subtractYears(endDate, length)

    endDate = parseDateToString(endDate)
    return endDate;

}

function subtractYears(date, year) {
    // plus one from what i want
    // one year is 13 year, two years is 24
    // not sure why 


    // maybne diffrenct funcs for year and months 


    // year = year + 1
    date.setFullYear(date.getFullYear() - year);
    return date;
}


// first get start date
// get date in time realitve to start date
// that is your date range 
// then put into to funcrtion to sort 