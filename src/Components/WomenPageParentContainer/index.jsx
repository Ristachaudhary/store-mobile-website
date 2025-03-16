import React from "react";
import "./style.css";
import WomenCategoriePageComp from "../WomenCategoryPageComp";
// import WomenImg1 from "../assets/WomenImg1.jpeg";
// import WomenImg2 from "../assets/WomenImg2.jpg";
// import WomenImg3 from "../assets/WomenImg3.webp";
// import WomenImg4 from "../assets/WomenImg4.jpeg";

// const womenPageCompData = [
//   {
//     id: 1,
//     image: WomenImg1,
//     title: "Green Dress",
//   },
//   {
//     id: 2,
//     image: WomenImg2,
//     title: "Blue Anarkali",
//   },
//   {
//     id: 3,
//     image: WomenImg3,
//     title: "Gown",
//   },
//   {
//     id: 4,
//     image: WomenImg4,
//     title: "Pink Dress",
//   },
// ];

const WomenPageParentContainer = () => {
  return (
    <div className="women-page-parent-container">
      {womenPageCompData.map((compData, index) => {
        console.log(compData);
        return (
          <div>
            <WomenCategoriePageComp
              key={compData.id}
              image={compData.image}
              title={compData.title}
            ></WomenCategoriePageComp>
          </div>
        );
      })}
    </div>
  );
};
export default WomenPageParentContainer;
