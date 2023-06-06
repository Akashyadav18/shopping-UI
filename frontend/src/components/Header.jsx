import React from 'react'
import { Link } from 'react-router-dom';
import {GiShoppingBag} from "react-icons/gi";
import {HiShoppingBag} from "react-icons/hi";
import {BsFillHeartFill} from "react-icons/bs";
import { useSelector } from 'react-redux';

const Header = () => {

  const {cartItems} = useSelector((state) => state.cart);
  const {shopItems} = useSelector((state) => state.shop);
  const {likeItems} = useSelector((state) => state.like);

  return (
    <nav className='header'>
       <Link to="/" className='color'> <GiShoppingBag size={30}/> Online Shop</Link>
       <Link to="/" className='color'>Home</Link>
       <Link to="/product" className='color'>Product</Link>
       <Link to="/products" className='color'>Shop</Link>
       <Link to="/like" className='color'><BsFillHeartFill/>
       <span className='likeValue'>{likeItems.length}</span>
       </Link>
       <Link to="/cart" className='color'><HiShoppingBag size={35}/>
       <span className='likeValue'>{cartItems.length + shopItems.length}</span>
       </Link>
    </nav>
  )
}

export default Header
