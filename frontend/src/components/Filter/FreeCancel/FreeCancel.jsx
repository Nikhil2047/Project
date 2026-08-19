import React from 'react'
import "./FreeCancel.css"
import { useFilter } from '../../../Context'

export const FreeCancel = () => {

  const {isCancelable, filterDispatch} = useFilter();

  const handleCancelChange = (event) =>{
    filterDispatch({
      type:"CANCELABLE",
      payload:event.target.checked
    })
  }

  return (
    <div className='filter-container'>
        <div className='freecancel-container'>
            <span className='filter-label'>Free Cancelation</span>
            <label className='slide'>
                <input type='checkbox' onChange={handleCancelChange} checked={isCancelable}/>
                <span className='slider round'></span>
            </label>
        </div>
    </div>
  )
}

export default FreeCancel