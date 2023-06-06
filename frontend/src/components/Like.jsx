import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {MdDelete} from "react-icons/md";
import "../styles/like.scss";
import { clearLike, removeToLike } from '../store/likeSlice';

const Like = () => {

  const dispatch = useDispatch();
  const {likeItems} = useSelector((state) => (state.like));

  const handleRemove = (item) => {
    dispatch(removeToLike(item));
  };
  const handleClear = () => {
    dispatch(clearLike());
  };

  return (
    <div>
    <h2>{likeItems.length > 0 ? "Like Items" : "Empty"}</h2>
      <div className='likeContainer'>
        {
          likeItems.map((item) => (
            <div className='likeCart' key={item.id}>
              <img src={item.image} alt={item.id}/>
              <h3>{item.category}</h3>
              <h4>{item.rating.rate}</h4>
              <h3>${item.price}</h3>
              <button onClick={() => handleRemove(item)}><MdDelete size={30} color='red'/></button>
            </div>
          ))
        }
        <button className='ClearBtn' onClick={() => handleClear()}>Clear</button>
      </div>
    </div>
  )
}

export default Like
