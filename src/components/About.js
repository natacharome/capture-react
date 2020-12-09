import React from "react";
import home1 from "../images/home1.jpg";
//Styled
import styled from "styled-components";
import {AboutSection, Description, Image, Hide} from "../styles"

const About = () => {
    return(
        <AboutSection>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come </h2>
                    </Hide>
                    <Hide>
                        <h2>true</h2>
                    </Hide> 
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="home"></img>
            </Image>
        </AboutSection>
    )    
}  


     
export default About;