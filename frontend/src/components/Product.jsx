import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../styles/product.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { addToCart } from '../store/cartSlice';
import { addToLike } from '../store/likeSlice';

const Product = () => {

    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.products);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const handleLike = (product) => {
        dispatch(addToLike(product));
    }

    return (
        <div>
            <h2>Redux Toolkit Shopping</h2>
            <div className='product'>
                {
                    items.map((product) => (
                        <div className='productCart' key={product.id}>
                            <img src={product.image} alt={product.id} />
                            <hr />
                            <h4>Name: {product.category}</h4>
                            <p>Price: $ {product.price}</p>
                            <p>Ratting: {product.rating.rate}</p>
                            <hr />
                            <button className='btn' onClick={() => handleLike(product)}><AiOutlineHeart size={28} /></button>
                            <button className='btn' onClick={() => handleAddToCart(product)}><BsFillCartPlusFill size={28} /></button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Product
