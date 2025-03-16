import React from "react";
import NavBar from "../NavBar";
import HeroSectionSlider from "../HeroSectionSlider";
import Categories from "../Categories";

const HomeComponent = () =>{
    return (
        <div>
            <NavBar></NavBar>
            <HeroSectionSlider></HeroSectionSlider>
            <Categories></Categories>
        </div>
    )
}
export default HomeComponent;