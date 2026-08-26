import { createContext, useContext, useState } from "react"

const initailValue = {
    hotel:{}
}

const HotelContext = createContext(initailValue)

const HotelProvider = ({children}) =>{

    const [hotel,setHotel] = useState({});

    return(
        <HotelContext.Provider value={{hotel,setHotel}}>
            {children}
        </HotelContext.Provider>
    )
}

const useHotel = () => useContext(HotelContext);

export {useHotel,HotelProvider};