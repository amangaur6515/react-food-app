import React from 'react'
import RestaurantCard from './RestaurantCard'
import { restaurants } from '../Restaurants'
import { useState,useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useIsOffline from '../utils/useIsOffline'


export const Body = () => {
    const [searchText,setSearchText]=useState('');
    const [searchResults,setSearchResults]=useState([]);
    const [restaurantsList,setRestaurantsList]=useState([])

    useEffect(()=>{
        getRestaurants();
    },[])
    
    useEffect(()=>{
      const arr=restaurantsList.filter((obj)=>(
        ((obj.info.name).toLowerCase()).includes(searchText.toLowerCase())
      ))
      setSearchResults(arr.reverse());
    },[searchText,restaurantsList])

     async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        console.log(json)
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const restaurantsData=json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle?.restaurants;
        setRestaurantsList(restaurantsData);
    }

    const offline=useIsOffline();
    if(offline){
      return <><h1>check your internet connection!</h1></>
    }
    
  return  (
    <div className='container'>
      <form>
        <div className='form-group col-md-6 mt-3 mx-5'>
          <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='form-control ' type='text' placeholder='Enter Restaurant Name' />
        </div>
      </form>
      <div className='row'>
        {searchResults.map((obj) => (
          <div className='col-md-3' key={obj.id}>
            <RestaurantCard restaurant={obj} /> 
          </div>
        ))}
      </div>
    </div>
    
    
  )
}
