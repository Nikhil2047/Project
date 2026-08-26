import React from 'react'
import "./FinalPrice.css"
import { useDate } from '../../Context';
import {DateSelector} from "../DateSelector/DateSelector";
import { useNavigate } from 'react-router';

export const FinalPrice = ({singleHotel}) => {

    const {_id,price,rating} = singleHotel;
    const navigate = useNavigate();
    const {guests,checkInDate,checkOutDate , dateDispatch} = useDate();

    const handleGuestChange = (event) =>{
        dateDispatch({
            type:"GUESTS",
            payload:event.target.value
        })
    }

    const handleReserveClick =()=>{
        navigate(`/confirm-booking/stay/${_id}`)
    }

  return (
    <div className='price-details-container'>
        <div className='price-details'>
            <p>
                <span className='price'>Rs. {price}</span> night
            </p>
            <span className='rating'>
                <span className="material-symbols-outlined">star</span>{rating}
            </span>
        </div>
        <div className='grid-container'>
            <div className='checks'>
                <label className='in'>Check in</label>
                <DateSelector placeholder="Add Dates" CheckInType="in"/>
        </div>
        <div className='checks'>
                <label className='out'>Check out</label>
                <DateSelector placeholder="Add Dates" CheckInType="out"/>
        </div>
        </div>
        <div className='guests'>
                <p className='guest'>GUESTS</p>
                {
                    guests <=0 ? (<input className='guest-count-input' type='number' placeholder='Add guests' value={guests} onChange={handleGuestChange}/>) : (<span>{guests} guests</span>)
                }
        </div>
        <div className='btn' onClick={handleReserveClick} disabled={checkInDate && checkOutDate && guests > 0 ? false : true}>
            <p className='reserve'>Reserve</p>
        </div>
        <div className='rupee'>
            <div className='finalprice'>
            <span className='span-1'>Rs.{price} x 2 nights</span>
            <span className='span-1'>Rs.{price * 2}</span>
            </div>
            <div className='finalprice'>
            <span className='span-1'>Service fee</span>
            <span className='span-1'>Rs.150</span>
            </div>
            <div className='finalprice'>
            <span className='span-1'>Total</span>
            <span className='span-1'>Rs.{price * 2 +  150}</span>
            </div>
        </div>
    </div>
  )
}

