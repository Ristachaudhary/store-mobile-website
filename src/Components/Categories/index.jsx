import React from "react";
import CategoriesComponent from "../CategoriesComponent";
import "./style.css";
import categories from "../Data/category"
import {Link} from "react-router-dom";


// Categories is a parent component that displays a list of CategoriesComponent based on imported data.
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

// map() generates a list dynamically.
// Link enables route-based navigation.
// key ensures React can efficiently track the list items.
// to is a prop that defines where the link should navigate.
// item.link comes from the categories array.