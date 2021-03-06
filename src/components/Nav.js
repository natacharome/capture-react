import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";

const Nav = () => {
    const {pathname} = useLocation();
    return(
        <StyledNav>
           <h1><Link to="/" id="logo">Capture</Link></h1> 
           <ul>
               <li>
                   <Link to="/">1. About Us</Link>
                   <Line 
                   transition={{ duration: 0.75 }} initial={{ width: '0%'}} animate={{ width: pathname === "/" ? "40%" : "0%"}}/>
               </li>
               <li>
                   <Link to="/work">2. Our Work</Link>
                   <Line 
                   transition={{ duration: 0.75 }} initial={{ width: '0%'}} animate={{ width: pathname === "/work" ? "40%" : "0%"}}/>
               </li>
               <li>
                   <Link to="/contact">3. Contact Us</Link>
                   <Line 
                   transition={{ duration: 0.75 }} initial={{ width: '0%'}} animate={{ width: pathname === "/contact" ? "40%" : "0%"}}/>
               </li>
           </ul>
        </StyledNav>
    )
}

const StyledNav = styled.div `
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items:center;
    padding: 1rem 10rem;
    background-color: #2c3049;
    position: sticky;
    top:0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 2rem;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
    @media(max-width:1300px){
      flex-direction: column;
      padding: 2rem 1rem;
      #logo {
          display: inline-block;
          margin: 1rem;
      }
      ul {
          padding: 2rem;
          justify-content: space-around;
          width: 100%;
      }
      li {
          padding:0;
      }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #415eff;
    width: 0%;
    margin:2px;
    position: absolute;
    @media(max-width:1300px){
        left: 0%;
    }
`;
    


export default Nav;