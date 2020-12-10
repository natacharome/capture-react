import React from "react";
import home1 from "../images/home1.jpg";
import { AboutSection, Description, Image, Hide } from "../styles"


// FramerMotion 
import { motion } from "framer-motion";

const About = () => {
    return(
        <AboutSection>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true</motion.h2>
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