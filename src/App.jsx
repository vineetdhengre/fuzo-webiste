import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Home/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
