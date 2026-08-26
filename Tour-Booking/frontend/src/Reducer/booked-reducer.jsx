export const bookingReducer = (state,{type,payload}) =>{
    switch (type){
        case "ADD_TO_BOOKINGS":
            return {
                ...state,
                bookings:[...state.bookings, payload]
            }
    }
}