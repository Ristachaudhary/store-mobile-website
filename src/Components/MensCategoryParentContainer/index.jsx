import React from "react";
import "./style.css";
import MensCategoryPageComponent from "../MensCategoryPageComp";
// import MensImg1 from "../assets/MensImg1.jpg";
// import MensImg2 from "../assets/MensImg2.webp";
// import MensImg3 from "../assets/MensImg3.jpeg";
// import MensImg4 from "../assets/MensImg5.webp";


// const mensCategoryPageData = [
//     {
//         id: 1,
//         image: MensImg1,
//         title: "Brown Shirt",
//     },
//     {
//         id: 2,
//         image: MensImg2,
//         title: "Offwhite Shirt",
//     },
//     {
//         id: 3,
//         image: MensImg3,
//         title: "Formal Suit",
//     },
//     {
//         id: 4,
//         image: MensImg4,
//         title: "Navyblue Suit",
//     },
// ]

const MensCategoryParentContainer = () =>{
    return (
<div className="men-page-parent-container">
    {
        mensCategoryPageData.map((item, index)=>{
            return (
             
                <MensCategoryPageComponent key={item.id} image={item.image} title={item.title}/>
               
                
            )
        })
    }

</div>
    )
}
export default MensCategoryParentContainer;