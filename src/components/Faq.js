import React from "react";

// Styles
import styled from "styled-components";
import {AboutSection} from "../styles";
const Faq = () => {
    return (
        <FaqSection>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start ?</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet.</p>
                    <p>Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et forensium negotiorum oppido gnarus.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet.</p>
                    <p>Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et forensium negotiorum oppido gnarus.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different payement methods</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet.</p>
                    <p>Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et forensium negotiorum oppido gnarus.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do you offer ?</h4>
                <div className="answer">
                    <p>Lorem ipsum, dolor sit amet.</p>
                    <p>Inter haec Orfitus praefecti potestate regebat urbem aeternam ultra modum delatae dignitatis sese efferens insolenter, vir quidem prudens et forensium negotiorum oppido gnarus.</p>
                </div>
                <div className="faq-line"></div>
            </div>
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