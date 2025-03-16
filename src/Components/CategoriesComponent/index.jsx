import React from "react";
import "./style.css";

const CategoriesComponent = (props) =>{
 

    return(
      <div className="women-categories_parent_buynowBtn_container" >
         <div className="women-categories_parent_container_img_text">
         <div className="women-categories_parent_container">
        <img src={props.image} className="women-categories_parent_container_img"/>
        <div className="women-categories_parent_container_text"><p>{props.title}</p></div>
     </div>
     
         </div>
    
    
      </div>
    )
}
export default CategoriesComponent;