import { createContext, useContext, useReducer, useState } from "react"
import {bookingReducer} from "../Reducer" 

const initialValue = {
    bookings: []
}

const bookingContext = createContext(initialValue);

const bookingProvider = ({children}) =>{

    const [{bookings}, bookingDispatch] = useReducer(bookingReducer,initialValue)
    return (
        <bookingContext.Provider value={{bookings,bookingDispatch}}>
            {children}
        </bookingContext.Provider>
    )
}

const useBooking =()=> useContext(bookingContext);

export {useBooking,bookingProvider}