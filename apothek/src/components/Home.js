import React from 'react';
import Nav from './Nav.js';

const Home = () => {
    return (
        <div id="Home">
            <Nav />
            <div className="section-one">
                <div className="header-container">
                    <h2 className="welcome-header">WELCOME TO <span>APOTHEK</span></h2>
                    <h3 className="sub-header">HOME OF THE <span>$15</span> EIGHTH</h3>
                </div>
                <div className="rating-container">
                    <span>Give us a rating</span>
                    <div className="star-container">
                        <img src={ require("../assets/yellow-star.svg") } alt="star review" className="star-icon"/>
                        <img src={ require("../assets/yellow-star.svg") } alt="star review" className="star-icon"/>
                        <img src={ require("../assets/yellow-star.svg") } alt="star review" className="star-icon"/>
                        <img src={ require("../assets/yellow-star.svg") } alt="star review" className="star-icon"/>
                        <img src={ require("../assets/yellow-star.svg") } alt="star review" className="star-icon"/>
                    </div>
                </div>
                <img
                    src={ require("../assets/woman-smoking.jpeg") }
                    alt="woman smoking cannsbis"
                    className="woman-smoking-img"
                />
            </div>
            <div className="section-two">
                <div className="btn-container">
                    <button className="free-del-btn">FREE DELIVERY ON ORDERS $50+</button>
                    <button>WEEKLY SPECIALS</button>
                </div>
            </div>
        </div>
    )
}

export default Home;