import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios";
import { useCategory } from '../../Hooks';
import "./SearchResult.css"
import { HotelCard, Navbar } from '../../components';
import { useDate } from '../../Context';

export const SearchResult = () => {

    const {destination} = useDate();
    const {hotelCategory} = useCategory();
    const [hotels, setHotels] = useState([]);

    useEffect(()=>{
        (async () => {
      try {
        const { data } = await axios.get(`https://travel-app-backend-bm5e.onrender.com/api/hotels?category=${hotelCategory}`);
        setHotels(data);
      } catch (error) {
        console.log(error);
      }
    })();
    },[])

    const filteredSearchResults = hotels.filter(({city,state,address})=>{
        return(
        address.toLowerCase() === destination.toLowerCase() ||
        city.toLowerCase() === destination.toLowerCase() ||
        state.toLowerCase() === destination.toLowerCase() 
        )
    })

  return (
    <Fragment>
        <Navbar/>
        <section className='filter-search-result-section'>
            {
                filteredSearchResults ? filteredSearchResults.map((hotel)=>{
                    return(
                        <HotelCard key={hotel._id} hotel={hotel}/>
                    )
                }):(<h3>Nothing Found</h3>)
            }
        </section>
    </Fragment>
  )
}

export default SearchResult