export const getHotelsByCancelation = (hotels, isCancelable)=>{
    const filteredHotels = hotels.filter((hotel)=>{
        return hotel.isCancelable === isCancelable;
    })
    return filteredHotels;
}