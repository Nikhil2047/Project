import React from 'react'
import "./HotelDetails.css"

export const HotelDetails = ({singleHotel}) => {

  const {hostName,hostJoinedOn,numberOfBathrooms,numberOfBeds,numberOfguest,numberOfBedrooms} = singleHotel;


  return (
    <div className='hotel-details-container'>
      <div className='host-details'>
        <p className='hostname p'>Hosted by {hostName}, Joined on {hostJoinedOn}</p>
        <span className='span'>{numberOfguest} guests. {numberOfBedrooms} bedrooms. {numberOfBeds} beds. {numberOfBathrooms} bathrooms.</span>
      </div>
      <div className='key-features host-details'>
          <div className='deatils-container'>
              <span className="material-symbols-outlined">apps</span><span className='detail-head'>Dedicated Workspace</span>
              <p className='para'>A common area with wifi that is well suited for working</p>
          </div>
          <div className='deatils-container'>
              <span className="material-symbols-outlined">apps</span><span className='detail-head'>Great Location</span>
              <p className='para'>80% of recent guests gave the location a 5-star rating</p>
          </div>
          <div className='deatils-container'>
              <span className="material-symbols-outlined">apps</span><span className='detail-head'>Free cancellation before 7 days of booking</span>
          </div>
      </div>
      <div className='offer-place'>
          <span className='place-offers'>What this place offers</span>
      </div>
      <div className='offer-deatils'>
          <span className='offers'>
            <span className="material-symbols-outlined">apps</span><p className='off kitchen'>Kitchen</p>
          </span>
          <span className='offers'>
            <span className="material-symbols-outlined">apps</span><p className='off'>Wifi</p>
          </span>
          <span className='offers'>
            <span className="material-symbols-outlined">apps</span><p className='off'>Washing Machine</p>
          </span>
      </div>
      <div className='offer-deatils-1'>
          <span className='offers'>
            <span className="material-symbols-outlined">apps</span><p className='off'>Free parking and premises</p>
          </span>
          <span className='offers'>
            <span className="material-symbols-outlined">apps</span><p className='off'>Dedicated Workspace</p>
          </span>
          <span className='offers'>
            <span className="material-symbols-outlined">apps</span><p className='off'>patio or Balcony</p>
          </span>
      </div>
    </div>
  )
}

export default HotelDetails