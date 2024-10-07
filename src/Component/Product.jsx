import React, { useContext } from 'react'
import AddtoCart from './AddtoCart'
import { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import notecontext from '../context/notes/notecontext';

function Product() {
    
   const a =useContext(notecontext);
  
   const values=useEffect(() => {
      console.log("Selected items updated:", a.selected_items);
  }, [a.selected_items]);
  return (
  
    <div class="mb-5 " id="category">
   
        <h2 class="heading1 mt-5 text-center text-danger">Category</h2>
        <div class="container-fluid">
        <div class="mt-5 product_content d-flex flex-wrap justify-content-center ">
         {a.products.map(product=>
         
            <div class="card  m-4 rounded-5 shadow bg-white ">
               <img class="img-fluid product_image"  src={product.product_image} width="300"    alt="" />
               <h3 class="mt-3 ms-2 mx-auto product_name" >{product.product_name}</h3>
               <div class="d-flex flex-wrap justify-content-between align-items-center m-3">
                  <h5 class="m-0 ms-2 product_price" >${product.product_price}</h5>
                   <button type="button" onClick={()=>{
                  a.Cart(product.id)
                  }} class="btn effect p-1 me-2 text-bg-danger effect">Add to Cart</button>
               </div>
               
            </div>
            )
         }
        </div>
        </div>
        
    </div>
  )
}

export default Product