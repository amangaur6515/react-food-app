import React from 'react'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'
const CartItemsCard = ({menuObj}) => {
    const imageUrl=`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${menuObj.card.info.imageId}`
    const dispatch=useDispatch()
   
  return (
    <div className=' row m-4 p-4 shadow ' style={{border:"1px solid black"}}>

        <div className='col-4'>
            <img src={imageUrl} width="100%" height="150" />
        </div>
        <div className='col-4'></div>
        <div className='col-4'>
            <h5 style={{color:"blue"}}>{menuObj.card.info.name}</h5> 
            <p style={{fontWeight:"lighter",fontFamily:"serif"}}>{menuObj.card.info.description}</p>
            
            <h4 style={{color:"green"}}>Price: &#8377;{menuObj.card.info.price/100}</h4>
            <button className='btn btn-primary' >Remove -</button>
        </div>
        
        
    </div>

  
    
  )
}

export default CartItemsCard