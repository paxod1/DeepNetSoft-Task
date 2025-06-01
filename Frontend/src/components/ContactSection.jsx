import React from 'react';
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import '../styles/contactSection.scss';

const ContactSection = () => {
    return (
        <section className="contact_section_main">
            <div className="contact_section_inner_div">
                <div className="contact_card_main">
                    <div className="contact_card_heading">CONNECT WITH US</div>
                    <div className="contact_icon">
                        <GiRotaryPhone style={{ color: 'rgb(243, 255, 69)', marginRight: '10px' }} />+91 9567843340
                    </div>
                    <div className="contact_details">
                        <MdOutlineMailOutline style={{ color: 'rgb(243, 255, 69)', marginRight: '10px' }} />info@deepnetsoft.com
                    </div>
                </div>

                <div className="contact_card_main">
                    <img
                        className="contact_logo"
                        src="https://res.cloudinary.com/dqgrcovgg/image/upload/v1742977624/om0f5rtijft2cqr0g480-removebg-preview_ywdcuv.png"
                        alt="logo"
                        height={'80px'}
                        width={'80px'}
                    />
                    <div className="conact_text">
                        <div className="deep">DEEP</div> NET
                        <div className="soft">SOFT</div>
                    </div>
                    <div className="contact_icon_middle_box">
                        <FiFacebook style={{ marginRight: '10px' }} />
                        <CiTwitter style={{ marginRight: '10px' }} />
                        <CiYoutube style={{ marginRight: '10px' }} />
                        <FaInstagram style={{ marginRight: '10px' }} />
                    </div>
                </div>

                <div className="contact_card_main">
                    <div className="contact_card_heading">FIND US</div>
                    <div className='contact_last_card'>
                        <div className="contact_iconlast_card-left">
                            <IoLocationOutline style={{ color: 'rgb(243, 255, 69)', margin: '10px' }} />
                        </div>
                        <div className="contact_details_last_card_right">First floor, Geo infopark,<br /> Infopark EXPY, Kakkanad</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;