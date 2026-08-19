import axios from 'axios'
import React, { useEffect,useState } from 'react'
import "./Categories.css";
import { useCategory } from '../../Hooks';
import {useFilter} from "../../Context"

export const Categories = () => {
    const [categories, setcategories] = useState([]);
    const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
    const {hotelCategory,setHotelCategory} = useCategory();
    const {filterDispatch}  = useFilter();

    const handleShowMoreRightClick = () =>{
        setNumberOfCategoryToShow((prev)=> prev + 8)
    }

    const handleShowMoreLeftClick = () =>{
        setNumberOfCategoryToShow((prev)=> prev - 8)
    }

    const handleFilterClick = () =>{
        filterDispatch({
            type:"SHOW_FILTER_MODAL"
        })
    }

    useEffect(()=>{
        (async()=>{
            try {
                const {data} = await axios.get("https://travel-app-backend-bm5e.onrender.com/api/category")
                const categoryToShow = data.slice(
                    numberOfCategoryToShow + 8 > data.length ? data.length - 8 : numberOfCategoryToShow,
                    numberOfCategoryToShow > data.length ? data.length : numberOfCategoryToShow + 8 );
                setcategories(categoryToShow)
            } catch (error) {
                console.log(error)
            }
        })()

    },[numberOfCategoryToShow])

    const handleCategoryClick = (category) =>{
        setHotelCategory(category)
    }


  return (
    <section className='categories'>
        {
            numberOfCategoryToShow +8 > categories.length && (
                <button className='btn-left btn-category' onClick={handleShowMoreLeftClick}><span className="material-symbols-outlined">chevron_left</span></button>
            )
        }
        {
            categories && categories.map(({ _id,category}) => <span className={`${category === hotelCategory ? "category-name" : ""}`} key={_id} onClick={()=>handleCategoryClick(category)}>{category}</span>)
        }
        {
            numberOfCategoryToShow -8 < categories.length && (
                <button className='btn-right btn-category' onClick={handleShowMoreRightClick}><span className="material-symbols-outlined">chevron_right</span></button>
            )
        }
        <button className='button btn-filter' onClick={handleFilterClick}>
            <span className="material-symbols-outlined">filter_alt</span>
            <span>Filter</span>
        </button>
    </section>
  )
}

export default Categories