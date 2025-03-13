import React from "react";
import './style.css';
import LogoImg from "./logo.png";
import { FaShoppingCart } from "react-icons/fa";
const NavBar = () =>{
    return(
<div className="navBar-container">
  <img src={LogoImg} className="logo_img"/>
  <div><FaShoppingCart className="cart-icon" /></div>
</div>
    )
}
export default NavBar;