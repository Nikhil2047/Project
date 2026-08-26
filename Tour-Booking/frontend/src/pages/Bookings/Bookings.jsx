import React, { Fragment } from 'react'
import "./Bookings.css"
import { useHotel, useDate, useFilter } from "../../Context";
import { Navbar } from '../../components'


export const Bookings = () => {

  const { hotel } = useHotel();

  const { orderId, name, image, city, state, checkInDate, checkOutDate, totalPayableAmount} = hotel;

  return (
    <Fragment>
      <Navbar/>

    </Fragment>
  )
}

export default Bookings