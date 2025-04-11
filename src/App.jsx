import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Header from './Components/Header';
import Product from "./Pages/Products/Product"
import About from './Pages/About/About';
import Contact from './Pages/Contact/contact';
import singleProduct from './Pages/SingleProduct/singleProduct';
import Error from './Pages/Error';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Thankyou from './Pages/Thankyou';
import ComingSoon from './Pages/ComingSoon/ComingSoon';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/" element={<Product />} />
            <Route path="/about-us" element={<ComingSoon/>} />
            <Route path="/delivery" element={<ComingSoon/>} />
            <Route path="/recipes" element={<ComingSoon/>} />
            <Route path="/offers" element={<ComingSoon/>} /> 
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="/single-product/:id" element={<singleProduct />} />
            <Route path="*" element={<Error />} />
            <Route path="/thankyou" element={<Thankyou/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
