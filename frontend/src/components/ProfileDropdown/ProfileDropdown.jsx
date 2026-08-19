import { useNavigate } from "react-router";
import { useAlert, useAuth, useDate, useFilter, useWishlist } from "../../Context"
import "./ProfileDropdown.css"


export const ProfileDropdown =  () =>{
    const {authDispatch,logout} = useAuth();
    const {dateDispatch} = useDate();
    const {filterDispatch} = useFilter();
    const {wishlistDispatch} = useWishlist();
    const {setAlert} = useAlert();
    const navigate = useNavigate();

    const handleWishlistClick =()=>{
        authDispatch({
            type:"SHOW_DROP_DOWN_OPTIONS"
        })
        navigate("/wishlist")
    }

    const handleMyBookingClick = () =>{
        authDispatch({
            type:"SHOW_DROP_DOWN_OPTIONS"
        })
        navigate("/order-summary")
    }

    const handleLogoutClick = async () =>{
        await logout();
        try {
            authDispatch({
            type:"CLEAR_USER_DATA",
        })
        authDispatch({
            type:"CLEAR_CREDENTIALS",
        })
        authDispatch({
            type:"SHOW_DROP_DOWN_OPTIONS",
        })
        dateDispatch({
            type:"CLEAR_INPUTS",
        })
        filterDispatch ({
            type:"CLEAR_ALL",
        })
        wishlistDispatch({
            type:"CLEAR_WISHLIST",
        })
        setAlert({
            open: true,
            message: "Logged out successfully",
            type: "success",
        })
        setTimeout(()=>{
            window.location.reload();
        },1000)
        } catch (error) {
            setAlert({
            open: true,
            message: "Logout failed. Please try again",
            type: "error",
        })
        }
    }


    return (
        <div className="drop-down-container">
            <span className="option-span wishlist-span" onClick={handleWishlistClick}><span class="material-icons-outlined">favorite_border</span>Wishlist</span>
            <span className="option-span my-orders" onClick={handleMyBookingClick}>
                <span class="material-symbols-outlined">
                    trip
                </span>
                My-Bookings
            </span>
            <span className="option-span logout" onClick={handleLogoutClick}>
                <span className="material-icons-outlined">
                    logout
                </span>
                Logout 
            </span>
        </div>
    )

}