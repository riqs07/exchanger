import React, { useState, useEffect, Fragment } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseDate } from '../utils/graphs'



export const StartDateSelect = (props) => {

    const { monitor } = props

    const [startDate, setStartDate] = useState(new Date())

    useEffect(() => {
        // this can come up to compairson component 
        // so that i can query api on info based on a  select component 
        let date = parseDate(startDate)
        monitor(date)

    }, [startDate])


    return (
        <Fragment>
            <DatePicker selected={startDate}
                onChange={date => setStartDate(date)}
                placeholderText="Click to select a date"
                minDate={new Date("2010/01/01")}
                maxDate={new Date()}
                inline
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
            />
        </Fragment>
    )
}


export const EndDateSelect = (props) => {

    const { monitor } = props

    const [endDate, setEndDate] = useState(new Date())

    useEffect(() => {
        // this can come up to compairson component 
        // so that i can query api on info based on a  select component 
        let date = parseDate(endDate)
        monitor(date)

    }, [endDate])


    return (
        <Fragment>
            <DatePicker selected={endDate}
                onChange={date => setEndDate(date)}
                placeholderText="Click to select a date"
                minDate={new Date("2010/01/01")}
                maxDate={new Date()}
                inline
                todayButton="Today"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
            />
        </Fragment>
    )
}
