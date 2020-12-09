import React from "react";
import clock from "../images/clock.svg";
import diaphragm from "../images/diaphragm.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/home2.png";

const Service = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock"></img>
                            <h3>Efficient</h3>
                        </div>
                        <p>Inter haec Orfitus praefecti.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"></img>
                            <h3>Team work</h3>
                        </div>
                        <p>Inter haec Orfitus praefecti.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"></img>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Inter haec Orfitus praefecti.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money"></img>
                            <h3>Affordable</h3>
                        </div>
                        <p>Inter haec Orfitus praefecti.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="home2"></img>
            </div>
        </div>
    )
}

export default Service;