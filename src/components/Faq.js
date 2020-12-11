import React, {useState} from "react";
import Toggle from "./Toggle";

// Styles
import styled from "styled-components";
import {AboutSection} from "../styles";
import { AnimateSharedLayout } from 'framer-motion';


const Faq = ({toggle, setToggle, title}) => {

    return (
        <FaqSection>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How do I Start ?">
                    <div className="answer">
                        <p>Lorem ipsum, dolor sit amet.</p>
                        <p>Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et forensium negotiorum oppido gnarus.</p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum, dolor sit amet.</p>
                        <p>Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et forensium negotiorum oppido gnarus.</p>
                    </div>
                </Toggle>
                <Toggle title="Different payment methods">
                    <div className="answer">
                        <p>Lorem ipsum, dolor sit amet.</p>
                        <p>Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et forensium negotiorum oppido gnarus.</p>
                    </div>
                </Toggle>
                <Toggle title="What product do you offer ?">
                    <div className="answer">
                        <p>Lorem ipsum, dolor sit amet.</p>
                        <p>Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et forensium negotiorum oppido gnarus.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </FaqSection>
    )
}

const FaqSection = styled(AboutSection)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }

`

export default Faq;