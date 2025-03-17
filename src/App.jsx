import React from 'react'
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductContainer from './Components/ProductContainer';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path="/women" element={<ProductContainer/>}/>
        <Route path ="/men" element={<ProductContainer/>}/>
        <Route path ="/kids" element={<ProductContainer/>}/>
        <Route path ="/shoes" element={<ProductContainer/>}/>
      </Routes>
    </Router>
   
  
  )
}

export default App
