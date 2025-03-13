import React from "react";
import "./style.css";
import TestImg from "../assets/women.jpg";

const WomenCategoriePage = () =>{
    return(
<div>
        <div className="women-categories_page_parent_buynowBtn_container">
             <div className="women-categories_page_parent_container_img_text">
             <div className="women-categories_page_parent_container">
            <img src={TestImg} className="women-categories_page_parent_container_img"/>
            <div className="women-categories_parent_container_text"><p>testing</p></div>
         </div>
         
             </div>
        
         <div className="categories_buynowBtn_Plus">
            <button className="categories_buynowBtn" >Buy Now</button>
            <div className="categories_PlusBtn"><FaPlus /></div>
         </div>
          </div>
</div>
    )
}
export default WomenCategoriePage;