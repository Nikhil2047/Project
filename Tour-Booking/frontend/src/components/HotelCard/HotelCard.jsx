import {Navigate, useNavigate} from "react-router-dom"
import React from 'react'
import { useWishlist, useAuth } from "../../Context"
import "./HotelCard.css"
import { findHotelInWishlist } from "../../utils"


export const HotelCard = ({hotel}) => {
    const {_id,name,image,address,state,rating,price} = hotel;

    const {wishlistDispatch,wishlist} = useWishlist();

    const isHotelInWishlist = findHotelInWishlist(wishlist,_id);

    const {token,authDispatch} = useAuth();

    const navigate = useNavigate();

    const handleHotelCardClick = () =>{
        if(token){
            navigate(`/hotels/${name}/${address}/${_id}`)
        }else{
            authDispatch({
                type:"SHOW_AUTH_MODAL"
            })
        }
       
    }

    const handleWishlistClick = () =>{
        if(token){
            if(!isHotelInWishlist){
            wishlistDispatch({
                type:"ADD_TO_WISHLIST",
                payload:hotel
            })
            }else{
                wishlistDispatch({
                    type:"REMOVE_FROM_WISHLIST",
                    payload: _id
                })
            }
        }else{
            authDispatch({
                type:"SHOW_AUTH_MODAL"
            })
        }
    }


  return (
        <div className="hotelcard-container">
            <div onClick={handleHotelCardClick}>
                <img className='img' src={image} alt={name ?? "Hotel"} />
            <div className="hotelcard-details">
                <div className='deatils-1'>
                    <span className='location'>{address}, {state}</span>
                    <span className='rating'>
                        <span className="material-symbols-outlined">star</span>
                        <span>{rating}</span>
                    </span>
                </div>
                <p className='hotel-name'>{name}</p>
                <p className='price-details'>
                    <span className='price'>Rs.{price}</span>
                    <span>night</span>
                </p>
            </div>
            </div>
            <button className='btn-wishlist' onClick={handleWishlistClick}>
                <span className={`material-symbols-outlined favorite ${isHotelInWishlist ? "selected" : ""}`}>favorite</span>
            </button>
            
        </div>
  )
}

export default HotelCard