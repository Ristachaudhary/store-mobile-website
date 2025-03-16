import React from "react";
import "./style.css";
import { FaPlus } from "react-icons/fa";


const MensCategoryPageComponent = (props) =>{
    return (

    <div>
            <div className="men-categories_page_parent_buynowBtn_container">
                 <div className="men-categories_page_parent_container_img_text">
                 <div className="men-categories_page_parent_container">
                <img src={props.image} className="men-categories_page_parent_container_img"/>
                <div className="men-categories_parent_container_text"><p>{props.title}</p></div>
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
export default MensCategoryPageComponent;