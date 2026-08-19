import React, { Fragment,useEffect,useState } from 'react'
import axios from 'axios'
import "./Payment.css"
import { Link, resolvePath, useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from "uuid";
import {useHotel, useDate, useAuth } from '../../Context'

export const Payment = () => {

  const params = useParams();

  const {id} = params;

  const navigate = useNavigate();

  const [singleHotel, setSingleHotel] = useState("")

  const {guests,checkInDate,checkOutDate , dateDispatch} = useDate();

  const {number,email,user,setOrderData} = useAuth();

   const { setHotel } = useHotel();

  const numberOfNights = checkInDate && checkOutDate ? (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24) : 0
  
  const {image,name,address,state,rating,price,city} = singleHotel;


  useEffect(()=>{
    (async()=>{
      try {
        const {data} = await axios.get(`https://travel-app-backend-bm5e.onrender.com/api/hotel/${id}`)
        setSingleHotel(data)
      } catch (error) {
         console.log(error)
      }
    })();
  },[])


  const totalPayableAmount = price * numberOfNights + 150;

  const loadScript = (source) =>{
    return new Promise((resolve)=>{
      const script = document.createElement("script");
      script.src = source;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script)
    })
  }

  const handleConfirmBooking = async(orderData) =>{
    const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if(!response){
      console.log({message:"Razorpay SDK failed to load"})
    }
  
  const options = {
    key: "rzp_test_TGCzdH7uVB4Jk8",
    amount: totalPayableAmount * 100,
    currency: "INR",
    name: "TravelO",
    email: (email),
    contact: (number),
    description: "Thank you for booking with us",

    handler: ({payment_id}) =>{
        const bookingData = {
        ...singleHotel,
        orderId: uuid(),
        payment_id, 
        checkInDate: checkInDate.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
        checkOutDate: checkOutDate.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
        totalPayableAmount
      };

        setHotel(bookingData);

        console.log(bookingData)
        
      const summaryData = {
          orderId: bookingData.orderId,
          name: bookingData.name,
          image: bookingData.image,
          state: bookingData.state,
          rating: bookingData.rating,
          price: bookingData.price,
          city: bookingData.city,
          checkInDate: bookingData.checkInDate,
          checkOutDate: bookingData.checkOutDate,
          totalPayableAmount: bookingData.totalPayableAmount
      }

        localStorage.setItem("orderSummary",JSON.stringify(summaryData));
        setOrderData(summaryData)

        navigate("/order-summary")
    },
    prefill:{
      name:(user),
      email:(email),
      contact:(number)
    }
  }

  

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  
}

  return (
    <Fragment>
      <header className='heading'>
        <h1 className='heading-1'>
          <Link className='link' to="/">TravelO</Link>
        </h1>
      </header>
      <main className='payment-page'>
        <div className='final-detail-container gap-md'>
          <h2>Trip Details</h2>
          <div className='dates-and-guests gap-md'>
            <h3>Your Trip</h3>
            <div>
              <p>Dates</p>
              <span>{checkInDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    })}{""} - {checkOutDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    })}</span>
            </div>
            <div>
              <p> Guests</p>
              <span>{guests} Guests</span>
            </div>
          </div>
          <div className='pay'>
            <h3>Pay with</h3>
            <div>Razorpay</div>
          </div>
          <button className='button btn-primary btn-reserve btn-pay' onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
        <div className='final-details'>
          <div className='image-detail-container'>
            <img className='image' src={image} alt={name}/>
            </div>
            <div className='detail-rating-container'>
              <div className='detail-rating'>
                <span>{name}</span>
                <span>{address}, {state}</span>
              </div>
              <div className='rating-container'>
                <span className='rating'>
                  <span className="material-symbols-outlined">star</span>
                  <span>{rating}</span>
                </span>
              </div>
            </div>
            <div className='tag'>
                Your booking is protected by <strong className='strong'>TravelO</strong> cover 
            </div>
            <div className='price-detail-container'>
                <div className='price-distribution'>
                  <h3>Price Details</h3>
                  <div className='final-price'>
                      <span className='span'>Rs. {price} x {numberOfNights} nights</span>
                      <span className='span'>Rs. {price * numberOfNights}</span>
                  </div>
                  <div className='final-price'>
                      <span className='span'>Service fee</span>
                      <span className='span'>Rs. 150</span>
                  </div>
                  <div className='final-price'>
                      <span className='span'>Total</span>
                      <span className='span'>Rs.{totalPayableAmount}</span>
                  </div>
                </div>
            </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Payment