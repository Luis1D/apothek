import React, { useState } from 'react';

const Nav = () => {
    const [menu, setMenu] = useState(false);

    const menuActivate = () => {
        setMenu(!menu);
    }

    return (
        <div id="Nav">
            <nav>
                <div className="logo-container">
                    <img
                        src={ require('../assets/logo.png') }
                        alt="Company Logo"
                        className="logo"
                    />
                    <h1>APOTHEK</h1>
                </div>
                <div className="mobile-menu">
                    <div className="menu-closed" onClick={ menuActivate }>
                        {
                            !menu ? <div className="icon-container"><div className="bar bar-one"></div>
                            <div className="bar bar-two"></div>
                            <div className="bar bar-three"></div></div> : <span>X</span>
                        }
                        
                    </div>
                    {
                        menu ? 
                        <ul>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Specials</li>
                            <li>Delivery Menu</li>
                            <li>Find Us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                            <li>More</li>
                        </ul> : null
                    }
                </div>
                <div className="desktop-menu"> 
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Specials</li>
                        <li>Delivery Menu</li>
                        <li>Find Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li>More</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;