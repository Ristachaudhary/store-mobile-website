import React from "react";
import "./style.css";
import { FaPlus } from "react-icons/fa";

const ProductComponent = (props) =>{
    return (


            <div className="product_comp_parent_buynowBtn_container">
                 
                 <div className="product_comp_parent_container_img_text">
                <img src={props.image} className="product_comp_container_img"/>
                <div className="product_comp_text"><p>{props.title}</p></div>
             </div>
             
               
            
             <div className="product_comp_buynowBtn_Plus">
                <button className="product_comp_buynowBtn" >Buy Now</button>
                <div className="product_comp_PlusBtn"><FaPlus /></div>
             </div>
              </div>
    

    )
}
export default ProductComponent;

// 🔥 What This Code Does:
// ✅ Displays a product card with:
// ✔️ An image
// ✔️ A product title
// ✔️ A "Buy Now" button
// ✔️ A "+" icon