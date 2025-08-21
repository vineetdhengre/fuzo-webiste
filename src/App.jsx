import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Pages/Home/Home";
import Header from './Components/Header';
import Product from "./Pages/Products/Product";
import Error from './Pages/Error';
// import singleProduct from './Pages/SingleProduct/singleProduct';
// import { GlobalStyle } from './GlobalStyle';
// import { ThemeProvider } from 'styled-components';
import Thankyou from './Pages/Thankyou';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import Contact from "./Pages/Contact/Contact";
import About from './Pages/About';
import Footer from './Components/Footer/Footer';
import AuthForm from './Components/Form';
import { CartProvider } from './Pages/Cart/CartContext'; // Import the CartProvider
import CartPage from './Pages/Cart/CartPage'; // Import the CartPage component
import { AuthProvider } from './Pages/Cart/AuthContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
         <BrowserRouter>
        <AuthProvider>
        <CartProvider>
         
            <Header />
            <Routes>
              {/* Home page */}
              <Route path="/" element={<Home />} />

              {/* Product page */}
              <Route path="/product/" element={<Product />} />

              {/* About Us */}
              <Route path="/about-us" element={<About />} />

              {/* Coming Soon Pages */}
              <Route path="/gifting" element={<ComingSoon />} />
              <Route path="/bulk-orders" element={<ComingSoon />} />

              {/* Contact Us */}
              <Route path="/contactUs" element={<Contact />} />

              {/* Sign In / Sign Up Page (AuthForm handles both) */}
              <Route path="/signIn" element={<AuthForm />} />

              {/* Single product (commented out - add if available) */}
              {/* <Route path="/single-product/:id" element={<singleProduct />} /> */}

              <Route path="/cart" element={<CartPage />} />

              {/* Thank You page */}
              <Route path="/thankyou" element={<Thankyou />} />

              {/* Error/404 page - wildcard route */}
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
         
        </CartProvider>
        </AuthProvider>
         </BrowserRouter>
      </div>
    </>
  );
}

export default App;
