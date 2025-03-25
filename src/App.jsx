import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Header from './Components/Header';
import Product from "./Pages/Products/Product"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/product" element={<Product/>} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
