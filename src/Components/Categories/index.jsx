import React from "react";
import CategoriesComponent from "../CategoriesComponent";
import "./style.css";
import categories from "../Data/category"
import {Link} from "react-router-dom";

const Categories = () =>{
    return (
<div className="categories_parent_container">
    {
        categories.map((item, index)=>{

            return(
                <Link to={item.link}>
                 <CategoriesComponent className="child-container" key={item.id} image={item.image} title={item.title} />
                </Link>
               

            );
        })
    }



  
</div>
    )
}
export default Categories;