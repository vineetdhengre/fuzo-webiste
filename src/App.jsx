import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import Header from './Components/Header';
import Product from "./Pages/Products/Product"
import singleProduct from './Pages/SingleProduct/singleProduct';
import Error from './Pages/Error';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Thankyou from './Pages/Thankyou';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import Contact from "./Pages/Contact/Contact"
import About from './Pages/About';
import Footer from './Components/Footer/Footer';
import AuthForm from './Components/AuthForm/AuthForm';

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
            <Route path="/about-us" element={<About/>} />
            <Route path="/gifting" element={<ComingSoon/>} />
            <Route path="/bulk-orders" element={<ComingSoon/>} />
            <Route path="/contactUs" element={<Contact />}/> 
            <Route path="/signIn" element={<AuthForm />}/> 
            <Route path="/single-product/:id" element={<singleProduct />} />
            <Route path="*" element={<Error />} />
            <Route path="/thankyou" element={<Thankyou/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
