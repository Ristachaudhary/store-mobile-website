import React from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Header = () =>{
    return (
<div className="header-container">
    <div className="header-left-arrow-icon">
    <FaArrowLeft />
    </div>
 <div><FaShoppingCart className="cart-icon" /></div>
</div>
    )
}
export default Header;