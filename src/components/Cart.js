import React from 'react'
import { useSelector } from 'react-redux'
import CartItemsCard from './CartItemsCard'
const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items)
  return (
    <div>
        <h1 className='text-center'>User Cart</h1>

        {cartItems.map((items)=>(

            // <h5>{items.name}-{items.price/100}&#8377; </h5>
            < CartItemsCard menuObj={items}/>
            
        ))}
    </div> 
  )
}

export default Cart