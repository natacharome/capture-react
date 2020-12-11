import React from "react";
import home1 from "../images/home1.jpg";
import { AboutSection, Description, Image, Hide } from "../styles"
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from "../components/Wave";
// FramerMotion 
import { motion } from "framer-motion";

const About = () => {
    return(
        <AboutSection>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true</motion.h2>
                    </Hide> 
                </div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="home"></motion.img>
            </Image>
            <Wave/>
        </AboutSection>
    )    
}  


export default About;