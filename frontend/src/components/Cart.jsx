import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../styles/cart.scss";
import {MdDelete} from "react-icons/md";
import { addToCart, clearCart, decreaseCart, getTotal, removeFromCart } from '../store/cartSlice';
import { addToShop, decreaseToShop, removeToShop, clearCartShop, getTotalShop } from '../store/shopSlice';

const Cart = () => {

  const dispatch = useDispatch()
  const {cartItems} = useSelector((state) => (state.cart))
  const {shopItems} = useSelector((state) => (state.shop))
  
  const cart = useSelector((state) => state.cart);
  const shop = useSelector((state) => state.shop)
  useEffect(() => {
    dispatch(getTotal());
    dispatch(getTotalShop())
  }, [cart, shop])

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  }
//  product
  const handleDecrease = (item) => {
    dispatch(decreaseCart(item));
  }

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  }

  const handleClear = () => {
    dispatch(clearCart());
  }

  //shop
  const handleRemoveShop = (item) => {
    dispatch(removeToShop(item));
  }
  const handleDecreaseShop = (item) => {
    dispatch(decreaseToShop(item));
  }
  const handleAddShop = (item) => {
    dispatch(addToShop(item));
  }
  const handleClearShop = () => {
    dispatch(clearCartShop());
  }

  return (
    <div>
      <h3 className='heading'>{cartItems.length + shopItems.length > 0 ? "Shopping Cart" : "Empty Cart" }</h3>
      <div className='topCard'>
        <p>Product</p>
        <p className='name'>Name</p>
        <p className='amount'>Amount</p>
        <p>Quantity</p>
        <p className='total'>Total</p>
        <p>Delete</p>
      </div>

      {/* redux toolkit fetch data */}

      <div className='cartContainer'>
        {
          cartItems.map((item) => (
            <div className='cartCard' key={item.id}>
              <img src={item.image} alt={item.id}/>
              <h4>{item.category}</h4>
              <h3>${item.price}</h3>
              <div className='quantity'>
              <button onClick={() => handleDecrease(item)}>-</button>
              {item.cartQuantity}
              <button onClick={() => handleAdd(item)}>+</button>
              </div>
              <h3>${item.price * item.cartQuantity}</h3>
              <button onClick={() => handleRemove(item)}><MdDelete size={30} color='red'/></button>
            </div>
          ))
        }
      </div>

        {/* shop */}

      <div className='cartContainer'>
        {
          shopItems.map((item) => (
            <div className='cartCard' key={item.id}>
              <img src={item.image} alt={item.id}/>
              <h4>{item.category}</h4>
              <h3>${item.price}</h3>
              <div className='quantity'>
              <button onClick={() => handleDecreaseShop(item)}>-</button>
              {item.cartQuantity}
              <button onClick={() => handleAddShop(item)}>+</button>
              </div>
              <h3>${item.price * item.cartQuantity}</h3>
              <button onClick={() => handleRemoveShop(item)}><MdDelete size={30} color='red'/></button>
            </div>
          ))
        }
      </div>

        <div className='subTotal'>
        <div className='clear'>
          <button onClick={() => {handleClear() ; handleClearShop()}}>Clear Cart</button>
        </div>
        <div className='sub-total'>
           <h3>SubTotal: ${cart.cartTotalAmount + shop.cartTotalAmount}</h3>
          <button>Check Cart</button>
        </div>
        </div>
    </div>
  )
}

export default Cart
