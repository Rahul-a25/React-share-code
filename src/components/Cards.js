import React, { useState } from 'react';
import '../styles/cards.css'
import {useSelector} from 'react-redux'
import store from '../redux/store';
const Cards = () => {
  const ApiData=useSelector((storeData)=>{
    return storeData
  })
    const result=ApiData.api
    // const {price, category, image,id} = item;
    // 
    const [Item,setItem] =useState([])
   const handleClick=()=>{
    store.dispatch({
        type:'item',
        payload:Item
      })
      
   }
   console.log(Item);
  return (
    <>
    
      {
        result.map((item)=>(
              // <Cards item={item} key={item.id} handleClick={handleClick} />
              <div key={item.id} className="cards">
        
        <div className="image_box">
            <img src={item.image} alt="Image" />
        </div>
        <div className="details">
            <p>{item.price}</p>
            
            <button  onClick={handleClick(setItem(item))} >Add to Cart</button>
        </div>
    </div>
  ))
}
        
   </> 
  )
}

export default Cards