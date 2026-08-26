import React from 'react'
import "./HotelImages.css"

export const HotelImages = ({singleHotel}) => {

  if (!singleHotel) return null;
  const { image ,imageArr } = singleHotel

  return (
    <div className='hotel-image-container'>
      <div className='primary-image-container'>
          <img className='hotel-img primary-image' src={image} alt="primary-image" />
      </div>
      <div className='secondary-image-container'>
        {
          imageArr && imageArr.map(image => <img key={image} className='hotel-img' src={image} alt='hotel-image'/>)
        }
      </div>
    </div>
  )
}

export default HotelImages