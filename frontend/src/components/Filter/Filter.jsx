import React from 'react'
import "./Filter.css"
import {PriceRange , RoomsAndBeds, PropertyType, Ratings, FreeCancel} from "./index"
import { useFilter } from '../../Context'

export const Filter = () => {

    const {filterDispatch} = useFilter();
    
    const handleFilterModalCloseClick = () =>{
        filterDispatch({
            type:"SHOW_FILTER_MODAL"
        })
    }

    const handleClearFilterClick = () =>{
        filterDispatch({
            type:"CLEAR_ALL"
        })
    }

  return (
    <div className='filter-modal'>
        <div className='filter-page'>
            <div className='filter-page-container'>
                <span className='filter-label'>Filter</span>
                <button className='btn-close' onClick={handleFilterModalCloseClick}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            <PriceRange/>
            <RoomsAndBeds/>
            <PropertyType/>
            <Ratings/>
            <FreeCancel/>
            <div className='clearall-container'>
                <button className='button cursor btn-link-primary' onClick={handleClearFilterClick}>Clear All</button>
                <button className='button cursor btn-primary btn-apply' onClick={handleFilterModalCloseClick}>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default Filter