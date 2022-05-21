import React from "react";
import img from "../image/react_img.svg";
import Common from "./Common";

const About = () =>{
    return(
    <>
       <Common name="Welcome to About Page" 
       imgsrc={img} 
       visit="/contact"
        btname="Contact Now"/>
    </>
    );
}
export default About;