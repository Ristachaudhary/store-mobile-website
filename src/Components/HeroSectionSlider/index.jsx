import React from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

0
const HeroSectionSlider = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      };
      const images = [
        "https://images.pexels.com/photos/1065085/pexels-photo-1065085.jpeg",
        "https://images.pexels.com/photos/3277026/pexels-photo-3277026.jpeg",
        "https://images.pexels.com/photos/1043512/pexels-photo-1043512.jpeg",
      ];
      console.log(images);
      return (
        <div className="slider-container">
<Slider {...settings}>
            {
            images.map((img, index)=>(
                <div key={index}>
                    <img src={img} className="slider_img"></img>
                </div>
            ))
        }
            
        </Slider>
        </div>
        
       
      )

}

export default HeroSectionSlider;