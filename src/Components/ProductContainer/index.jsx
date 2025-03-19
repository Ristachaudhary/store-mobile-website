import React from "react";
import ProductComponent from "../ProductComponent";
import "./style.css";
import Data from "../Data/product";
import {useLocation} from "react-router-dom";
import Header from "../Header";



// find the path 
// redirect to that path

const ProductContainer = () =>{
    const location = useLocation();
    const resultLocation = location.pathname.slice(1);
    console.log(resultLocation);
    // let programDataByRoute = [];
    // if(resultLocation === "women"){
    //    programDataByRoute = Data.women
    // }else if(resultLocation === "men"){
    //  programDataByRoute = Data.men
    // }else if(resultLocation === "kids"){
    //     programDataByRoute = Data.kids
    // }else if(resultLocation === "shoes"){
    //     programDataByRoute = Data.shoes
    
    // }
 let programDataByRoute = Data[resultLocation];
//  It is a shortcut to access an object property dynamically using bracket notation.
    
    return(
        <>
        <Header/>
        <div className="product-container-parent-container">
    {
        programDataByRoute.map((item, index)=>(

            <ProductComponent key={index}  image={item.image} title={item.title} product={item}/>
        )

        

    )
    }
</div>
        </>

    )
}
export default ProductContainer;


// useLocation – A React Router hook that provides information about the current URL path.
// useLocation() – Returns an object containing details about the current URL.
// location.pathname.slice(1) – Removes the leading / from the pathname to extract the category name (e.g., "women", "men", "kids", "shoes").
// Extracts the URL path using useLocation.
// ✅ Matches the path to product categories in Data.
// ✅ Renders a list of ProductComponent components based on matched data.
// ✅ Passes product image and title to each ProductComponent.

/*✅ Example Workflow
URL = /men
resultLocation = "men"
programDataByRoute = Data.men
map() creates a list of ProductComponent components using Data.men
Products are displayed 🎯*/

// 🌟 Next Steps
// ✅ Add error handling (e.g., if resultLocation doesn’t match any category).
// ✅ Improve styling for better UI.
// ✅ Handle cases where no products are available for a category. 😎

/*Data[resultLocation] dynamically accesses the property based on the value of resultLocation.
✅ resultLocation becomes the key to find the corresponding value inside the Data object.*/