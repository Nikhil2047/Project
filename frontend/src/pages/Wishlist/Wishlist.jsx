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
            wishlist && wishlist.map((hotel)=> {
              return (
                <HotelCard key={hotel._id} hotel={hotel}/>
              )
            })
          }
        </section>
    </Fragment>
  )
}

export default Wishlist