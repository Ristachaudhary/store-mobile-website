import React from "react";
import './style.css';
import LogoImg from "./logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/Cartcontext";
const NavBar = () =>{
  const {cart} = useCart();
    return(
<div className="navBar-container">
  <img src={LogoImg} className="logo_img"/>
  <div><FaShoppingCart className="cart-icon" /></div>
  <div>{cart.length}</div>
</div>
    )
}
export default NavBar;