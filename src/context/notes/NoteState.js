import NoteContext from "./notecontext";
import { useEffect, useState} from "react";
const NoteState=(props)=>{
    const product_obj=[
        {
            id:1,
            product_name:'Sweater',
            product_price:'11',
            product_image:'https://cdn.shopify.com/s/files/1/0028/1945/7082/files/114112.It-s-Always-For-You-Black-Babydoll-Dress__copy_4_400x.jpg?v=1724945219',
            unit:'1'
         },
        {
           id:2,
            product_name:'Jeans',
            product_price:'20',
            product_image:'https://cdn.shopify.com/s/files/1/0028/1945/7082/files/114343.Reach-For-It-Olive-Green-Plaid-Dress__copy_3_400x.jpg?v=1724788554',
            unit:'1'
         },
        {
           id:3,
           product_name:'Embrodery',
           product_price:'300',
           product_image:'https://cdn.shopify.com/s/files/1/0028/1945/7082/files/114364.Doing-The-Best-Brown-Striped-Dress__copy_1_400x.jpg?v=1724858897',
           unit:'1'
         },
        {
           id:4,
           product_name:'Loan ',
           product_price:'900',
           product_image:'https://cdn.shopify.com/s/files/1/0028/1945/7082/files/114112.It-s-Always-For-You-Black-Babydoll-Dress__copy_4_400x.jpg?v=1724945219',
            unit:'1'
      
         },
        {
           id:5,
           product_name:'Wb Himani',
           product_price:'300',
           product_image:'https://cdn.shopify.com/s/files/1/0028/1945/7082/files/113739.Better-Than-You-Know-Plum-Purple-Puff-Sleeve-Blouse__copy_2_400x.jpg?v=1724876643',
           unit:'1'
         },
        {
           id:6,
           product_name:'J.Fabric',
           product_price:'500',
           product_image:'https://cdn.shopify.com/s/files/1/0028/1945/7082/files/114343.Reach-For-It-Olive-Green-Plaid-Dress__copy_3_400x.jpg?v=1724788554',
           unit:'1'
        },
        
        ]
        const getLocalItems=()=>{
         let items=localStorage.getItem("items");
         if(items ===null){
            return [];
           
         }
         else{
            return JSON.parse(items);
         }
      }
        var[add_cart,set_addcart]=useState(0);
        const[products,setproducts]=useState(product_obj);
        const [selected_items, set_selected_items] = useState(() => getLocalItems()); // Initialize from local storage
        const Cart=(id)=>{
      
            (products.map(product=>{
            
              if(product.id===id)
              {
               set_selected_items((prevItems)=>{
                  const existing=prevItems.find((item)=>item.id===id)
                  if(existing)
                     {   
                        return prevItems.map((item) =>   
                           item.id===id ? {...item,unit:parseInt(item.unit)+ 1,product_price:((parseInt(item.unit)+1)*parseInt(product.product_price) )} :item,
                           
                        );
                        
                     }
                     else{
                        parseInt(add_cart)
                        set_addcart(add_cart+1);
                        // console.log(add_cart+"cart items")
                        return  [...prevItems,{...product}];
                     }
             
                })
       
              }
            }
              
   ))
}
useEffect(()=>{
   localStorage.setItem("items",JSON.stringify(selected_items));},
   [selected_items]  
);

// getting number of cart items
const getLocalcart=()=>{
   let items=localStorage.getItem("addtocart");
   if(items ===null){
      return 0;
   }
   else{
      return JSON.parse(items);
   }
}
 var[add_cart,set_addcart]= useState(() => getLocalcart()); 
 useEffect(()=>{
   localStorage.setItem("addtocart",JSON.stringify(add_cart));},
   [add_cart]  
);

    return(
        <NoteContext.Provider value={{products,Cart,selected_items,getLocalItems,add_cart,set_addcart}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;

