import React from 'react'
import notecontext from '../context/notes/notecontext';
import { useContext,useState ,useEffect} from 'react';
import shopping from '../images/shopping.png'
function AddtoCart()  {
  const a=useContext(notecontext);
  
  //  console.log("sa"+ {selected_items});
  const getcart=()=>{
    let val= localStorage.getItem("items");
    if(val === null ){
     
      return [];
     }
     else{
   
     return JSON.parse(val);
     }
    
   }     
  const[add,setAdd]=useState(()=>getcart());
  var[subtotal,setsubtotal]=useState(0);
 
    add.map(product=>{
         subtotal=parseInt(subtotal)+parseInt(product.product_price);
        return subtotal;
       
  })
  
  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(add))
  },[add])
  // const[items,set_items]=useState(()=>getcart());
//  quantity add
  const Add=(id)=>{
    
    const update=add.map(add_quan=>
      {
      if(id===add_quan.id){     
     
        const originalItem = a.products.find((item) => item.id === id);
        console.log(originalItem)
        if(originalItem){      
            const r= { ...add_quan, unit:parseInt(add_quan.unit) + 1 ,product_price:(parseInt(add_quan.unit)+1)*originalItem.product_price,
            };
          
              return r;
          }
      }
    
      return add_quan;
       
    });
    setAdd(update);
  
       }
      //  quantity subtract
       const Subtract=(id)=>{
    
        const update=add.map(add_quan=>
          {
          if(id===add_quan.id){     
         
            const originalItem = a.products.find((item) => item.id === id);
            console.log(originalItem)
            if(originalItem){
    
               if(add_quan.unit>1){
                const r= { ...add_quan, unit:parseInt(add_quan.unit) -1 ,product_price:(parseInt(add_quan.unit)-1)*originalItem.product_price,
                };
              
                  return r;
                }
              }
          }
        
          return add_quan;
           
        });
        setAdd(update);
      
           }
          
        // Delete item
        const Delete=(id)=>{
         
              const originalItem = add.findIndex((item) => item.id === id);
              console.log(originalItem)
              if (originalItem >= 0) {
                const newArray = [...add.slice(0, originalItem), ...add.slice(originalItem + 1)];
                setAdd(newArray);
                a.set_addcart(a.add_cart -1);  // Ensures it doesn't go below 0

             
              }
             }
      
             
  return (
    <div>
      {/* console.log({a.Cart().id}) */}
        <div id="cart " class="mb-5 pb-5 content" >
          <h1>Add To Cart</h1>
          <div class="container-fluid " id="add-to-cart-items" >
          {add.length > 0 ? (
             <div class="row align-items-start justify-content-center">
             <div class="col-lg-5 col-md-8 col-sm-10  m-1 items ">
 
              {add.map(product=>
                   <div class="cartItem row align-items-start" key={product.id}>
                     <div class="col-3 mb-2">
                       <img class="w-100 img-fluid" src={product.product_image} height="150" alt="art image"/>
                     </div>
                     <div class="col-6 mb-2">
                       <p class="pl-1 mb-0">{product.product_name}</p>
                       <div  class=" d-flex align-items-center justify-content-between">
                         <div class="mx-2 rounded-5 border d-flex align-items-center justify-content-center">
                              <div type="button"   cursor="pointer"   onClick={() =>  Subtract(product.id)} className="cursor-pointer mx-2 minus">
                              -
                              </div>
                               {product.unit}    
                              <div type="button"   cursor="pointer"   onClick={() => Add(product.id)} className="cursor-pointer mx-2 plus">
                              +
                              </div> 
                              <div class="text-center delete" type="button" onClick={()=>Delete(product.id)}>
                           <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"  width="15px" height="15px"alt="" />
                         </div>
                         </div>
                            <p id="cartItem1Price" class="m-0">${product.product_price}</p>
                          
                      </div>
                     </div>
                    
                     
                     <hr/>
                  </div>
              )
              }
              </div>
              
               <div class="col-lg-5 col-md-8 col-sm-10 p-3 m-1 proceed form">
                 <div class="row m-0">
                   <div class="col-sm-8 p-0">
                     <h6>Subtotal</h6>
                   </div>
                   <div class="col-sm-4 p-0">
                     <p id="subtotal">{subtotal}</p>
                   </div>
                 </div>
                 <div class="row m-0">
                   <div class="col-sm-8 p-0 ">
                     <h6>Tax</h6>
                   </div>
                   <div class="col-sm-4 p-0">
                     <p id="tax">$6.00</p>
                   </div>
                 </div>
                 <hr/>
                 <div class="row mx-0 mb-2">
                   <div class="col-sm-8 p-0 d-inline">
                     <h5>Total</h5>
                   </div>
                   <div class="col-sm-4 p-0">
                     <p id="total">${subtotal+6.00}</p>
                   </div>
                 </div>
               </div>
             </div>
  ) : <div class="text-center">
     <img src={shopping} width="400" height="400"class="img-fluid" ></img>
    </div>
}
           
          </div>
       </div>
    </div>
    
  )
}

export default AddtoCart