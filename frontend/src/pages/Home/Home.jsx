import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Navbar, HotelCard , SearchStayWithDate, Categories, Filter, AuthModal, ProfileDropdown,Alert} from '../../components';
import "./Home.css";
import { useCategory } from '../../Hooks';
import { useDate, useFilter, useAuth, useAlert } from '../../Context';
import {getHotelsByPrice, getHotelsByRoomsAndBeds, getHotelsByPropertyType, getHotelsByRatings, getHotelsByCancelation} from "../../utils";

export const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(16)
  const [testData, setTestData] = useState([])
  const [hotels, setHotels] = useState([]);
  const {hotelCategory} = useCategory();
  const { isSearchModalOpen } = useDate();
  const {isFilterModalOpen, priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, travelRating, isCancelable} = useFilter();

  const {isAuthModalOpen, isDropDownModalOpen} = useAuth();
  const {alert} = useAlert();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://travel-app-backend-bm5e.onrender.com/api/hotels`);
        setTestData(data)
        setHotels(data ? data.slice(0, 16) : []);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://travel-app-backend-bm5e.onrender.com/api/hotels?category=${hotelCategory}`);
        setTestData(data)
        setHotels(data ? data.slice(0, 16) : []);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [hotelCategory]);

  const fetchMoreData = () => {
    if(hotels.length >= testData.length){
      setHasMore(false);
      return
    }
    setTimeout(()=>{
      if(hotels && hotels.length > 0){
        setHotels(hotels.concat(testData.slice(currentIndex, currentIndex + 16)));
        setCurrentIndex(prev => prev + 16)
      }else{
        setHotels([])
      }
    },1000)
  }

  const filteredHotelsByPrice = getHotelsByPrice(hotels, priceRange);
  const filteredHotelsByBedsAndRooms = getHotelsByRoomsAndBeds(filteredHotelsByPrice, noOfBedrooms, noOfBeds, noOfBathrooms)
  const filteredHotelsByPropertyType = getHotelsByPropertyType(filteredHotelsByBedsAndRooms, propertyType)
  const filteredHotelsByRatings = getHotelsByRatings(filteredHotelsByPropertyType, travelRating);
  const filteredHotelsByCancelation = getHotelsByCancelation(filteredHotelsByRatings, isCancelable);

  return (
    <div>
      <Navbar />
      <Categories/>
      { hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={ hotels.length > 0 && <h3 className='alert-text'>Loading...</h3>}
          endMessage={<p className='alert-text'>You have seen it all!</p>}
        >
          <main className='main'>
            {filteredHotelsByCancelation && filteredHotelsByCancelation.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
          </main>
        </InfiniteScroll> 
      ) : (
        <></>
      )}
      {isDropDownModalOpen && <ProfileDropdown/>}
      {isSearchModalOpen && <SearchStayWithDate/>}
      {isFilterModalOpen && <Filter/>}
      {isAuthModalOpen && <AuthModal/>}
      {alert.open && <Alert/>}
    </div>
  );
};

export default Home;  