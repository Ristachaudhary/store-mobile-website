import React from "react";
import ProductComponent from "../ProductComponent";
import "./style.css";
import Data from "../Data/product";
import {useLocation} from "react-router-dom";


// find the path 
// redirect to that path

const ProductContainer = () =>{
    const location = useLocation();
    const resultLocation = location.pathname.slice(1);
    console.log(resultLocation);
    return(
<div className="product-container-parent-container">
    <ProductComponent />
</div>
    )
}
export default ProductContainer;