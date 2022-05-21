import React from "react";  
import img from "../image/code_thinking.svg";
import Common from "./Common";

const Home = () =>{
    return(
    <>
       <Common name="Grow your business with" 
       imgsrc={img} 
       visit="/service"
        btname="Get Started"/>
    </>
    );
}
export default Home;