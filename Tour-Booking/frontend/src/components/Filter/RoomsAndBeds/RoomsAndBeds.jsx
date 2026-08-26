import "./RoomsAndBeds.css"
import { useFilter } from "../../../Context"

const numberOfAmenities = ["Any","1","2","3","4","5+"]

export const RoomsAndBeds = () => {

    const {filterDispatch, noOfBathrooms, noOfBedrooms, noOfBeds} = useFilter();

    const handleBedroomsClick = (number) =>{
        filterDispatch({
            type:"BEDROOMS",
            payload: number
        })
    }

    const handleBathroomsClick = (number) =>{
        filterDispatch({
            type:"BATHROOMS",
            payload: number
        })
    }

    const handleBedsClick = (number) =>{
        filterDispatch({
            type:"BEDS",
            payload: number
        })
    }

  return (
    <div className='filter-container'>
        <span className='filter-label'>Rooms And Beds</span>
        <div className='label-container'>
            <div className='span-label-container'>
                <span className='span-label'>Bedrooms</span>
                <span className='span-label'>Beds</span>
                <span className='span-label'>Bathrooms</span>
            </div>
            <div className='span-label-container'>
                <div>
                    {
                        numberOfAmenities.map((number)=>{
                            return (
                                <span className={`span-label aminity-count ${noOfBedrooms.toString() === number ? "selected" : ""}`} key={`bedroom-${number}`} onClick={()=>handleBedroomsClick(number)}>{number}</span>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        numberOfAmenities.map((number)=>{
                            return (
                                <span className={`span-label aminity-count ${noOfBeds.toString() === number ? "selected" : ""}`} key={`bed-${number}`} onClick={()=>handleBedsClick(number)}>{number}</span>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        numberOfAmenities.map((number)=>{
                            return (
                                <span className={`span-label aminity-count ${noOfBathrooms.toString() === number ? "selected" : ""}`} key={`bathroom-${number}`} onClick={()=>handleBathroomsClick(number)}>{number}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomsAndBeds