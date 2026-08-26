import React from 'react'
import "./Ratings.css"
import { useFilter } from '../../../Context'

const ratings = [ "1", "2", "3", "4", "5"]

export const Ratings = () => {

    const {travelRating,filterDispatch} = useFilter();

    const handleRatingsClick = (rating) =>{
        filterDispatch({
            type:"RATING",
            payload:rating
        })
    }
  return (
    <div className='filter-container'>
        <span className='filter-label'>Ratings</span>
        <div className='rating-container'>
            {
                ratings.map((rating)=>{
                    return(
                        <span className={`span-label aminity-count star ${travelRating.toString() === rating ? "selected" : ""}`} key={rating} onClick={()=>handleRatingsClick(rating)}>{rating} &Up</span>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Ratings