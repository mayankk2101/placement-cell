import React from "react";
import Title from "./title";
import Info from "./info";
import Objectives from "./objective";
import Footer from "./footer";


function homePage(){
    return <>
    <Title />
    <Info/>
    <Objectives/>
    <Footer/>
    </>
}

export default homePage;