import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading';
import "../styles/detail.scss";


const ShopDetails = () => {

    const params = useParams();
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShop = async () => {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
            console.log(data);
            setItems(data);
            setLoading(false)
        }
        fetchShop();
    }, [params.id])
    return (
        <div>
            {
                loading ? <Loading /> : (
                    <>
                        <h2>Shop Detail</h2>
                        <h3 className='title'>{items.title}</h3>
                        <div className='shopProduct'>
                        <div>
                            <img src={items.image} alt={items.id} />
                        </div>
                        <div className='placed'>
                            <h4> {items.category}</h4>
                            <h3>Price: $ {items.price}</h3>
                            <h4>ratting: {items.rating.rate}</h4>
                            <p className='desc'>{items.description}</p>
                        </div>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default ShopDetails
