import React from 'react';
import './style.css';
import { CiShoppingCart } from 'react-icons/ci';
import { useCart } from '../../Pages/Cart/CartContext';
import { useNavigate } from 'react-router-dom';   // new code till
const Header = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-custom ">
      <div className="container-fluid">
        {/* Logo (Always visible on left on mobile) */}
        <a className="navbar-brand d-lg-none" href="/">
          <img src="/assets/logo.png" alt="Logo" className="logo-img" />
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible nav */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="/">HOME</a></li>
            <li className="nav-item"><a className="nav-link" href="/product">PRODUCT</a></li>
            <li className="nav-item"><a className="nav-link" href="/about-us">ABOUT US</a></li>
            <li className="nav-item"><a className="nav-link" href="/gifting">GIFTING</a></li>
          </ul>

          {/* Center logo for large screens */}
          <a className="navbar-brand d-none d-lg-block mx-auto" href="/">
            <img src="/assets/logo.png" alt="Logo" className="logo-img" />
          </a>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item"><a className="nav-link" href="/bulk-orders">BULK ORDERS</a></li>
            <li className="nav-item"><a className="nav-link" href="/contactUs">CONTACT US</a></li>
            <li className="nav-item">
              <a className="btn order-btn" href="/signIn">SIGN IN/UP</a>
            </li>

            <li className="nav-item position-relative" onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
              <CiShoppingCart className="cart-trolley ms-3" size={24} />
              {cartItems.length > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    background: '#dc2d2d',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '3px 7px',
                    fontSize: '13px',
                  }}
                >
                  {cartItems.length}
                </span>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;




{/* <li className="nav-item position-relative">
        <CiShoppingCart className="cart-trolley ms-3" size={24} />
        {cartCount > 0 && (
          <span
            style={{
              position: 'absolute',
              background: '#dc2d2d',
              color: 'white',
              borderRadius: '50%',
              padding: '3px 7px',
              fontSize: '13px',
            }}
          >
            {cartCount}
          </span>
        )}
      </li> */}