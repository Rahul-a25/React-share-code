import React, { useState,useEffect } from 'react';
import '../styles/product.css'
import Cards from './Cards';
import store from '../redux/store';
import { useSelector } from 'react-redux';
const Product = () => {
    const [Data,SetData]=useState([])
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((result) => SetData(result));
          
      }, []);
      store.dispatch({
        type:'api' ,
        payload:Data
    
     })
      const ApiData=useSelector((storeData)=>{
        return storeData
      })
        const result=ApiData.api

  return (
    <>
    <h1 style={{textAlign:"center", marginTop:"20px ",color:"red"}}>Product Component</h1>
    <section>
    {
      result.length>0 ?(
        <Cards/>
       ):<h1 style={{textAlign:'center',color:"red"}}>Wait Product is Loading.....</h1>
    }
      

    </section>
  
    </>
  )
}

export default Product