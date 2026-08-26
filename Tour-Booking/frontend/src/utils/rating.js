export const getHotelsByRatings = (hotels,rating)=>{
    const filteredHotels = hotels.filter((hotel)=>{
        return hotel.rating >= rating
    })
    return filteredHotels;
}