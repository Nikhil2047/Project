import { Fragment } from "react";
import { Navbar, HotelCard } from "../../components"
import "./Wishlist.css";
import { useWishlist } from "../../Context";

export const Wishlist = () => {

  const {wishlist} = useWishlist();

  return (
    <Fragment>
        <Navbar/>
        <h2 className="heading-2">Your Wishlist</h2>
        <section className="wishlist-section">
          {
            wishlist && wishlist.length > 0 ? (
              wishlist.map((hotel) =>(
                <HotelCard key={hotel._id} hotel={hotel}/>
              )) 
            ) : (
                <p className="">Your wishlist is empty.</p>
              )
          }
        </section>
    </Fragment>
  )
}

export default Wishlist