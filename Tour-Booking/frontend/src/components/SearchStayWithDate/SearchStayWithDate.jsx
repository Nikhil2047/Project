import React, { useEffect,useState } from 'react';
import axios from "axios";
import "./SearchStayWithDate.css"
import DateSelector from '../DateSelector/DateSelector'
import { useDate } from '../../Context/date-context'
import { useCategory } from '../../Hooks'
import { useNavigate } from 'react-router';

export const SearchStayWithDate = () => {
    const [hotels, setHotels] = useState([]);
    const {destination,guests,isSearchResultOpen,dateDispatch} = useDate();
    const {hotelCategory} = useCategory();
    const navigate = useNavigate();

    useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://travel-app-backend-bm5e.onrender.com/api/hotels?category=${hotelCategory}`);
        setHotels(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [hotelCategory]);

    const handleDestinationChange =(event)=>{
        dateDispatch({
            type:"DESTINATION",
            payload:event.target.value
        })
    }

    const handleGuestChange =(event) =>{
        dateDispatch({
            type:"GUESTS",
            payload:event.target.value
        })
    }

    const handleSearchResultClick = (address) =>{
        dateDispatch({
            type:"DESTINATION",
            payload:address
        })
    }

    const handleDestinationFocus = () =>{
        dateDispatch({
            type:"SHOW_SEARCH_RESULT"
        })
    }

    const handleSearchButtonClick = () =>{
        dateDispatch({
            type:"CLOSE_SEARCH_MODAL"
        })
        navigate(`/hotels/${destination}`)
    }

    const destinationOptions = hotels.filter(({address,city,state,country})=>{
        return(
        address.toLowerCase().includes(destination.toLowerCase()) ||
        city.toLowerCase().includes(destination.toLowerCase()) ||
        state.toLowerCase().includes(destination.toLowerCase()) ||
        country.toLowerCase().includes(destination.toLowerCase())
        ) 
    })

    

  return (
    <div className='destination-container'>
        <div className='destination-options'>
            <div className='location-container'>
                <label className='label'>Where</label>
                <input value={destination} onChange={handleDestinationChange} onFocus={handleDestinationFocus} className='search-dest' placeholder='Search Destination' autoFocus/>
            </div>
            <div className='location-container'>
                <label className='label'>Check in</label>
                <DateSelector placeholder="Add Dates" CheckInType="in"/>
            </div>
            <div className='location-container'>
                <label className='label'>Check out</label>
                <DateSelector placeholder="Add Dates" CheckInType="out"/>
            </div>
            <div className='location-container'>
                <label className='label'>No. of Guests</label>
                <input value={guests} className='search-dest' placeholder='Add guests' onChange={handleGuestChange} />
            </div>
            <div className='search-container' onClick={handleSearchButtonClick}>
                <span className="material-symbols-outlined">search</span>
                <span>Search</span>
            </div>
        </div>
        {
            isSearchResultOpen && (
            <div className='search-result-container'>
            {
                destinationOptions && destinationOptions.map(({address,city},index)=>{
                    return (
                    <p className='para-cursor' key={index} onClick={()=>handleSearchResultClick(address)}>
                        {address},{city}
                    </p>
                    )
                })
            }
        </div>
        )}
    </div>
  )
}

export default SearchStayWithDate