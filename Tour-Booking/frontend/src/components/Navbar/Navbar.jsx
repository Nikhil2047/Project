import React from 'react'
import "./Navbar.css"
import { useDate, useAuth } from '../../Context'
import { useNavigate } from 'react-router';


export const Navbar = () => {

    const {destination,dateDispatch,checkInDate,checkOutDate,guests} = useDate();

    const {authDispatch, token, user} = useAuth();

    const navigate = useNavigate();

    const handleSearchClick = () =>{
        dateDispatch({
            type: "OPEN_SEARCH_MODAL"
        })
    }

    const handleTravelOClick = () =>{
        navigate("/")
    }

    const handleAuthClick = (event) =>{
        if(token){
            authDispatch({
                type:"SHOW_DROP_DOWN_OPTIONS"
            })
        }else{
            authDispatch({
            type:"SHOW_AUTH_MODAL"
           })
        }
    }


    
  return (
    <header className='heading'>
        <h1 className='heading-1'>
            <a className='link' onClick={handleTravelOClick}>TravelO</a>
        </h1>
        <div className='form-container' onClick={handleSearchClick}>
            <span className='form-option'>{destination || "Any Where"}</span>
            <span className='border'></span>
            <span className='form-option'>
                {checkInDate && checkOutDate
                    ? `${checkInDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    })} - ${checkOutDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    })}`
                : "Any Week"}
            </span>
            <span className='border'></span>
            <span className='form-option'>{guests > 0 ? `${guests} guests` : "Add Guests"}</span>
            <span className="material-symbols-outlined search">search</span>
        </div>
        <div className='user-name-container'>
            {
                token ? <span className='user'>{user}</span> : ""
            }
        </div>
        <nav className='navbar' onClick={handleAuthClick}>
            <div className="nav">
                <span className="material-symbols-outlined profile-option menu" >menu</span>
                <span className="material-symbols-outlined profile-option person">person_2</span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar