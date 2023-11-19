import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItemsCard from './CartItemsCard'
import { clearCart } from '../utils/cartSlice'
const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
  return (
    <div>
        <h1 className='text-center'>User Cart</h1>
        <button className='btn btn-danger' style={{marginLeft:"1000px"}} onClick={()=>handleClearCart()}>Clear-Cart</button>
        {cartItems.length===0?
            <h6 className='text-center text-success'>Your Cart Is Empty</h6> :
            cartItems.map((items)=>(

                // <h5>{items.name}-{items.price/100}&#8377; </h5>
                < CartItemsCard menuObj={items}/>
                
            ))

        }
        {}
    </div> 
  )
} 

export default Cart