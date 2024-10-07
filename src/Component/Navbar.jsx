import React from 'react'
import logo from '../images/logo.png'
import cart from '../images/shopping-cart.png'
import { Link,useNavigate } from 'react-router-dom'
import { useState,useContext,useEffect } from 'react';
import notecontext from '../context/notes/notecontext';
function Navbar() {
 // Create state to track the active link
 const [activeLink, setActiveLink] = useState('');
const navigate= useNavigate();
const a=useContext(notecontext);
const handleClick = (link) => {
  setActiveLink(link);

  if (link === 'category') {
    window.location.replace('/#category');
       }  
//  else {
//     // For other links, let React Router handle navigation
//     navigate(`/${link === 'home' ? '' : link}`);
//   }
};
// useEffect(()=>{
//   localStorage.setItem("addtocart",JSON.stringify(a.add_cart));},
//   [a.add_cart]  
// );
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark rounded-5 mx-3 mt-5 ">
          <div class="container-fluid">
            <img src={logo} width="30px" height={30} />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 topnav">
                <li class="nav-item">
                  <Link to='/'  
                    className={activeLink === 'home' ? 'nav-link active text-white mb-2 ' : 'nav-link text-white mb-2'}
                    onClick={() => handleClick('home')}>
                      Home
                  </Link>
                </li>
               
                <li class="nav-item">
                  <Link to='#category'  
                    className={activeLink === 'category' ? 'nav-link active text-white mb-2' : 'nav-link text-white mb-2' }
                    onClick={() => handleClick('category')}>
                      Category
                  </Link>   
                </li>
                
              </ul>
           
                  <Link to='/addtocart'  
                    className={activeLink === 'addtocart' ? 'nav-link active text-white position-relative mb-2' : 'nav-link text-white position-relative mb-2'}
                    onClick={() => handleClick('addtocart')}>
                     <img src={cart} />
                     <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                       {a.add_cart}
                        {/* <span class="visually-hidden">unread messages</span> */}
                      </span>
                  </Link>
             
                
            </div>
          </div>
        
        </nav>
        {/* <hr class="m-0"/> */}
      

        
    </div>
  )
}

export default Navbar