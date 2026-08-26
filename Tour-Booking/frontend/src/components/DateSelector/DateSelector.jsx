import React, { useState } from 'react'
import "./DateSelector.css"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker'
import { useDate } from '../../Context/date-context';

export const DateSelector = ({placeholder ,CheckInType}) => {

  const { checkInDate,checkOutDate,dateDispatch} = useDate();

  const handleDateChange = (date) =>{
    dateDispatch({
      type: CheckInType === "in" ? "CHECK_IN" : "CHECK_OUT",
      payload: date,
    })
  }

  const handleDateFocus = () =>{
    dateDispatch({
      type:"DATE_FOCUS",
      
    })
  }

  return (
    <DatePicker
        selected={CheckInType === "in" ? checkInDate : checkOutDate}
        onChange={(date)=> handleDateChange(date)}
        onFocus={handleDateFocus}
        className='search-dest input'
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholder}
        closeOnScroll={true}
    />

  )
}

export default DateSelector