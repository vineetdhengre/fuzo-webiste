import React from 'react';
import './style.css';
import { CiShoppingCart } from "react-icons/ci";


const Header = () => {
    return (
        <>
            <div className='headerWrapper'>
                <div className='top-strip bg-pink'>
                    <div className='container pt-3 pb-3'>
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
                </div>
            </div>

            <nav class="navbar navbar-expand-lg navbar-custom">
                <div class="container-fluid">
                    {/* <!-- Navbar Toggler Button --> */}
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}

                    {/* <!-- Center Logo --> */}
                    {/* <a class="navbar-brand mx-auto d-lg-none" href="#" src="/assets/logo.png"></a> */}

                    <div class="collapse navbar-collapse" id="navbarContent">
                        <div class="row w-100 header-custom">
                            {/* <!-- Left Side Menu --> */}
                            <div class="col-lg-5 ">
                                <ul class="navbar-nav">
                                    <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/product">PRODUCT</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/about-us">WHY US</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/delivery">DELIVERY</a></li>
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
                                    <li class="nav-item"><a class="nav-link" href="/recipes">RECIPES</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/offers">OFFERS</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/contact-us">CONTACT FUZO</a></li>
                                    <li class="nav-item">
                                        <a class="btn order-btn" href="#">SIGN IN/UP</a>
                                    </li>
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


