import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/header.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className='home_navbar_main'>
            <div className='home_navbar_inner_section'>
                <div className='home_navbar_left'>
                    <div className='home_navbar_logo_side'>
                        <img
                            className="navbar_logo"
                            src="https://res.cloudinary.com/dqgrcovgg/image/upload/v1742977624/om0f5rtijft2cqr0g480-removebg-preview_ywdcuv.png"
                            alt="logo"
                            height={'50px'}
                            width={'50px'}
                        />
                        <div className="navbar_text">
                            <div className='navbar_log_firstline'>
                                <div className="deep">DEEP</div> NET
                            </div>
                            <div className="soft">SOFT</div>
                        </div>
                    </div>
                </div>
                <div className='home_navbar_right'>
                    <h5>HOME</h5>
                    <h5 className="active">MENU</h5>
                    <h5>MAKE A RESERVATION</h5>
                    <h5>CONTACT US</h5>
                </div>
                <div className="menu_toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars style={{ color: 'rgb(205, 205, 205)' }} />
                </div>
                {menuOpen && (
                    <div className="dropdown_menu">
                        <h5>HOME</h5>
                        <h5 className="active">MENU</h5>
                        <h5>MAKE A RESERVATION</h5>
                        <h5>CONTACT US</h5>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Header;