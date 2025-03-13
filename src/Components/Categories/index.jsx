import React from "react";
import WomenCategories from "../WomenCategories";
import "./style.css";
import Women from "../assets/women.jpg";
import Mens from "../assets/mens.jpeg";
import Kids from "../assets/kids.jpeg";
import Footwear from "../assets/footwear.jpg";

const categories =[
    {
        id:1,
        image: Women,
        title: "Women Clothing",
    },
    {
        id: 2,
        image: Mens,
        title: "Mens Clothing",
    },
    {
        id: 3,
        image: Kids,
        title: "Kids Clothing",
    },
    {
        id: 4,
        image: Footwear,
        title: "Footwear",
    }
]
const Categories = () =>{
    return (
<div className="categories_parent_container">
    {
        categories.map((item, index)=>{
            return(
                <WomenCategories className="child-container" key={item.id} image={item.image} title={item.title}/>

            );
        })
    }



    {/* <WomenCategories className="child-container"/>
    <WomenCategories className="child-container"/>
    <WomenCategories className="child-container"/> */}
</div>
    )
}
export default Categories;