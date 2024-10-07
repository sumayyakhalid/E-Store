import React, { useState } from 'react'
import dress from '../images/dress.png'
import mid from '../images/mid_image.png'
import shoe from '../images/shoe.png'
import Product from './Product'
import notecontext from '../context/notes/notecontext'
import { useEffect,useContext } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Header() {
  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(() => {
    // Check if the URL hash is present
    const hash = window.location.hash;
    if (hash === '#category') {
      // Scroll to the category section
      const element = document.getElementById('category');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div class="content">
         <section className="header ">
            <div class="row m-0 justify-content-center">
                <div  data-aos="fade-right" class="col-lg-4 col-md-8 col-sm-10 align-content-center">
                 
                    <h1 class="heading1" >
                      Dress Up & <br/> Stand Out:Be Bold
                    </h1>
                    <p class="mt-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <button type="button" class=" m-3 btn text-bg-danger effect rounded-5 ">Shop Now</button>
                </div>
                <div class="col-lg-4 col-md-7 col-sm-10">
                   <img src={mid} height="500" width="559" class="img-fluid"/>
                </div>
                <div class="col-lg-4 col-md-8 col-sm-10 justify-content-center d-flex align-items-center">
                   <img src={dress} width="300" height="100"class="img-fluid" />
                </div>
            </div>
            <div class="row m-0 justify-content-center">
                <div class="p-5 col-lg-4 col-md-8 col-sm-10 align-content-center side-bar-color">
                 <img src={shoe} width="500" height="500"class="img-fluid" ></img>
                 <h2 class=" heading1 text-white">
                  StepStyle
                    </h2>
                </div>
                <div data-aos="fade-up" class="p-5 col-lg-4 col-md-8 col-sm-10 align-content-center">
                 
                    <h1 class="heading1">
                   New Arrival
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  
                </div>
                <div class="p-5 col-lg-4 col-md-8 col-sm-10 align-content-center side-bar-color">
                  <div>
                    <h6 class="text-danger" >
                     special offer
                    </h6>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <span class="text-bg-danger p-3 mt-5" >
                        50% OFF
                        </span>
                  </div>
                </div>
            </div>
       </section>
       <Product/>
    </div>
    
  )
}

export default Header