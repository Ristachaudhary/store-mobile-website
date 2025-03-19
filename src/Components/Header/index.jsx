import React from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { useCart } from "../../Context/Cartcontext";
const Header = () =>{
    const {cart} = useCart();
    const navigate = useNavigate();
    const handleGoBackBtn = () =>{
    navigate(-1);
    }
    return (
<div className="header-container">
    <div className="header-left-arrow-icon"
    onClick={handleGoBackBtn}
    >
        
    <FaArrowLeft />
    </div>
 <div><FaShoppingCart className="cart-icon" /></div>
 <div>{cart.length}</div>

</div>
    )
}
export default Header;


/*Cart functionality where there should be badge showing number of unique item count; do not include quantity.
home page and all product page badge should have the equal number count.    */