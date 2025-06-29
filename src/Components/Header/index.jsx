import React from 'react';
import './style.css';
import { CiShoppingCart } from "react-icons/ci";


const Header = () => {
    return (
        <>
            {/* <div className='headerWrapper bg-pink'>
                
                    <div className='container pt-3 pb-1'>
                        <div className='row'>
                        <div className='col-md-9'>
                            <p className="p-2 mb-0 text-white font-weight-light text-center "> <marquee direction="right"> Grab the Offer - Buy 2 and Get 1 FREE!!</marquee> </p>
                        </div>
                        <div className='col-md-3 text-center cart-trolley-link'  >
                            <a class="btn order-btn" href="#">ORDER NOW</a>
                            <CiShoppingCart className='cart-trolley' />
                            <span className='cart-total-items'>10</span>
                        </div>
                        </div>
                        
                        
                    </div>
             
            </div> */}

            <nav class="navbar navbar-expand-lg navbar-custom">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarContent">
                        <div class="row w-100 header-custom">
                            {/* <!-- Left Side Menu --> */}
                            <div class="col-lg-5 ">
                                <ul class="navbar-nav">
                                    <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/product">PRODUCT</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/about-us">ABOUT US</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/delivery">GIFTING</a></li>
                                </ul>
                            </div>

                            {/* <!-- Center Logo for Large Screens --> */}
                            <div class="col-lg-2  d-none d-lg-block text-center">
                                <a class="navbar-brand " href="/">
                                    <img src="/assets/logo.png" alt="Logo" class="logo-img"/>
                                </a>
                            </div>

                            {/* <!-- Right Side Menu --> */}
                            <div class="col-lg-5 ">
                                <ul class="navbar-nav">
                                    <li class="nav-item"><a class="nav-link" href="/recipes">BULK ORDERS</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/offers">CONTACT US</a></li>
                                    <li class="nav-item">
                                        <a class="btn order-btn" href="#">SIGN IN/UP</a>
                                    </li>
                                    <CiShoppingCart className='cart-trolley' />
                                    <span className='cart-total-items'>10</span>
                                    {/* <li class="nav-item"><a class="nav-link" href="#">SIGN IN/UP</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Header;


