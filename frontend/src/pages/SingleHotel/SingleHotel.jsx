import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { HotelDetails, HotelImages, Navbar } from '../../components';
import "./SingleHotel.css"
import { FinalPrice } from '../../components/FinalPrice/FinalPrice';

export const SingleHotel = () => {

  const {id} = useParams();
  const [singleHotel, setSingleHotel] = useState(null)
  
  useEffect(()=>{
    (async()=>{
      try {
        const {data} = await axios.get(`https://travel-app-backend-bm5e.onrender.com/api/hotel/${id}`)
        setSingleHotel(data)
      } catch (error) {
         console.log(error)
      }
    })();
  },[id])

  if (!singleHotel) return null;
  const {name,state} = singleHotel;

  return (
    <div>
      <Navbar/>
      <main className='single-Hotel-page'>
        <p className='hotel-name-add'>
          {name},{state}
        </p>
          <HotelImages singleHotel={singleHotel}/>
          <div className='hotel-details'>
            <HotelDetails singleHotel={singleHotel} />
            <FinalPrice singleHotel={singleHotel}/>
          </div>
      </main>
    </div>
  )
}

export default SingleHotel