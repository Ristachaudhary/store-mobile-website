import React from 'react'
// import Slider from "./Components/HeroSectionSlider";
// import NavBar from "./Components/NavBar";
// import Categories from "./Components/Categories";
import HomeComponent from './Components/HomeComponent';
// import WomenPageParentContainer from './Components/WomenPageParentContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MensCategoryParentContainer from './Components/MensCategoryParentContainer';
import ProductContainer from './Components/ProductContainer';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path="/women" element={<ProductContainer/>}/>
        <Route path ="/men" element={<MensCategoryParentContainer/>}/>
      </Routes>
    </Router>
   
  
  )
}

export default App
