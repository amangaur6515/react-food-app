import React from 'react'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import UserContext from '../utils/userContext'
const RestaurantCard = ({restaurant}) => {
  const {user}=useContext(UserContext)
  const imageUrl=`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`
  return (
    <div className='m-4 p-4'>
      <div className='card h-100 w-100 shadow-lg' >
        <img src={imageUrl} width="100%" height="150" className='card-img-top' />
        <div className='card-body'>
          <div className='card-title'>
              <h6>{restaurant.info.name}</h6>
          </div>
          <div className='card-text'>
            <p>Cost: {restaurant.info.costForTwo}</p>
            <p>Location: {restaurant.info.locality} {restaurant.info.areaName}</p>
            <p>Rating: {restaurant.info.avgRating}<span style={{color:"blue"}}>&#9733; {user.name}-{user.gender}</span></p>
            <Link to={`restaurant/${restaurant.info.id}`} className='btn btn-primary' >Explore Menu</Link>

          </div>
        </div>

      </div>
    </div>
  )
}

export default RestaurantCard