import React, { useEffect,useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import MenuCard from './MenuCard'
const RestaurantDetails = () => {
  //const params=useParams();
  const [menuCards,setMenuCards]=useState([])
  const {id}=useParams();
  console.log(id)
  useEffect(()=>{
    getRestaurantMenu();
  },[])
  async function getRestaurantMenu(){
    const res=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
    const json=await res.json();
    const menuCards= await json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    setMenuCards(menuCards)
    console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
  }
  
  return (
    <div className='container'>
      <div className='col'>
        {menuCards.map((menuObj)=>(
          <div className='row-md-1' key={menuObj.id}>
            <MenuCard   menuObj={menuObj} />
          </div>
          
        ))}
      </div>
    </div>
    
  )
}

export default RestaurantDetails