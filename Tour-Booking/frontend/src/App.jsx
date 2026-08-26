import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router"
import {Bookings, Home,OrderSummary,Payment,SearchResult,SingleHotel,Wishlist} from "./pages";
import { Filter } from './components';
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels/:name/:address/:id' element={<SingleHotel/>}/>
        <Route path='/hotels/:address' element={<SearchResult/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/confirm-booking/stay/:id' element={<Payment/>}/>
        <Route path='/order-summary' element={<OrderSummary/>}/>
        <Route path='/my-bookings' element={<Bookings/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App