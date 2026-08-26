import { useState} from "react";
import { useHotel, useDate, useFilter, useAuth } from "../../Context";
import { useNavigate } from "react-router-dom";
import "./OrderSummaryComp.css";

export const OrderSummaryComp = () => {

    const navigate = useNavigate();
    const {orderData} = useAuth();

    if (!orderData) {
        return <p className="order-not-found">No order found.</p>;
    }

    const { orderId, name, image, city, state, checkInDate, checkOutDate, totalPayableAmount} = orderData;

    const handleContinueBookingClick = () => {
        navigate("/");
    }

    return (
        <div className="os-container">
            <div className="os-header">
                <h2>Order Summary</h2>
                <button className="button btn-auth btn-close" onClick={handleContinueBookingClick}>
                    <span className="material-icons-outlined">
                        close
                    </span>
                </button>
            </div>
            <span className="span-md">Booking ID: {orderId}</span>
            <div className="booking-container">
                <div className="hoteldetails">
                    <span className="fs-md">{name}</span>
                    <span className="span-md">{city}, {state}</span>
                </div>
                <div>
                    <img className="img" src={image} alt={name} />
                </div>
            </div>
            <div className="checkin-checkout-container">
                <div className="checking-container">
                    <span className="span-md">Check In</span>
                    <p className="fs-md">{checkInDate}</p>
                </div>
                <div className="checking-container">
                    <span className="span-md">Check Out</span>
                    <p className="fs-md"> {checkOutDate}</p>
                </div>
                <div className="total-amount-container">
                    <div className="total-paid-container">
                        <span className="span-md">Total Amount Paid</span>
                        <p className="fs-md">Rs. {totalPayableAmount}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="button btn-primary btn-reserve" onClick={handleContinueBookingClick}>Continue Booking</button>
            </div>
        </div>
    )
}