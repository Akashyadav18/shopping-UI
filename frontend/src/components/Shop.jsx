import React, { useEffect, useState } from 'react';
import axios from "axios";
import Loading from "./Loading"
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "../styles/shop.scss";
import { useDispatch } from 'react-redux';
import { addToShop } from '../store/shopSlice';
import { addToLike } from '../store/likeSlice';


const Shop = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);


    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(addToShop(item));
    }

    const handleLike = (item) => {
        dispatch(addToLike(item));
    }

    useEffect(() => {
        const fetchData = async () => {
            // const res = await fetch("https://fakestoreapi.com/products")
            // const data = await res.json();
            // console.log(data);
            try {
                const { data } = await axios.get("https://fakestoreapi.com/products")
                setProduct(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {
                loading ? <Loading /> : (
                    <>
                        <h2>Shop</h2>
                        <div className='shop'>
                            {
                                product.map((item) => (
                                    <div className='shop'>
                                        <div className='shopContainer'>
                                            <Link to={`${item.id}`} className='shopCart'>
                                                {/* <div className='shopCart' > */}
                                                <img src={item.image} alt={item.id} />
                                                <hr />
                                                <h4>Name: {item.category}</h4>
                                                <p>Price: $ {item.price}</p>
                                                <p>Ratting: {item.rating.rate}</p>
                                            </Link>
                                            <div>
                                                <hr />
                                                <button className='likeBtn' onClick={() => handleLike(item)}><AiOutlineHeart size={28} /></button>
                                                <button className='likeBtn' onClick={() => handleAdd(item)}><BsFillCartPlusFill size={28} /></button>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
};

// const ShopCart = ({id, name, img, price, rate}) => (

//     <Link to={`${id}`} className='shop'>
//         <div className='shopCart' >
//             <img src={img} alt={id} />

//             <hr />
//             <h4>Name: {name}</h4>
//             <p>Price: $ {price}</p>
//             <p>Ratting: {rate}</p>
//             <hr />
//             <button className='likeBtn'><AiOutlineHeart size={28} /></button>
//             <button className='likeBtn' onClick={() => handleAdd(name)}><BsFillCartPlusFill size={28} /></button>

//         </div>
//     </Link>

// )

export default Shop
