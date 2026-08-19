import React from 'react'
import "./PropertyType.css"
import {v4 as uuid} from "uuid";
import { useFilter } from '../../../Context'

const propertyTypes = [{ id:uuid(), type: "House" },{ id:uuid(), type: "Guest House" },{ id:uuid(), type: "Flat" },{ id:uuid(), type: "Hotel" }]

export const PropertyType = () => {
    const {propertyType, filterDispatch} = useFilter()

    const  handlePropertyClick = (property) =>{
        filterDispatch({
            type:"PROPERTY_TYPE",
            payload:property
        })
    }
  return (
    <div className='filter-container'>
        <span className='filter-label'>Property Type</span>
        <div className='property-container'>
            {
                propertyTypes.map(({id,type})=>{
                    return(
                        <span className={`span-label property-type ${propertyType === type ? "selected" : ""}`} key={id} onClick={()=> handlePropertyClick(type)}>{type}</span>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PropertyType