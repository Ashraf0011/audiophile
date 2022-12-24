import React from 'react'
import Buttons from './Utils/Buttons'

import { GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import Logo from './Utils/Logo';

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_links'>
                <Logo />
                <div className='footer_buttons'>
                    <Buttons className="nav_btn" name={"Home"} button_type={"nav_btn"} />
                    <Buttons className="nav_btn" name={"Headphones"} button_type={"nav_btn"} />
                    <Buttons className="nav_btn" name={"Speakers"} button_type={"nav_btn"} />
                    <Buttons className="nav_btn" name={"Earphones"} button_type={"nav_btn"} />
                </div>
            </div>
            <div className='footer_details'>
                <p className='footer_inner_text'>
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <br />
                <p>Copyright 2021. All Rights Reserved</p>

            </div>
            <div className='icons'>
                <IconContext.Provider value={{ style: { className: "footer_icon_each" } }} >
                    <GrFacebook className='icon_each' />
                    <GrTwitter className='icon_each' />
                    <GrInstagram className='icon_each' />
                </IconContext.Provider>
            </div>

        </div >
    )
}

export default Footer