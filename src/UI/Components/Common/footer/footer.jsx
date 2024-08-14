import React from 'react';
import './footer.css'
import Logo from '../../Assets/logo.png';
import NewsletterDiv from './newsletter';
import ApplePay from '../../Assets/apple.png';
import GPay from '../../Assets/google-pay.png';
import PayPal from '../../Assets/paypal.png';
import Visa from '../../Assets/visa.png';
import 'boxicons';

const Footer = () => {

    return (
        <div id="commonFooter">
            <NewsletterDiv/>
            <div id="footerContainer1">
                <div id="footerAbout" className="footerList">
                    <img src={Logo}></img>
                    <span id="footertext">We have clothes that suits your style and which you are proud to wear. From women to men</span>
                    <div id="socialIcons">
                        <box-icon type='logo' name='twitter'></box-icon>
                        <box-icon name='meta' type='logo' ></box-icon>
                        <box-icon name='instagram' type='logo' ></box-icon>
                        <box-icon name='github' type='logo' ></box-icon>
                    </div>
                </div>
                <div id="footerCompany" className="footerList">
                    COMPANY
                    <ul>
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div id="footerHelp" className="footerList">
                    HELP
                    <ul>
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div id="faq" className="footerList">
                    FAQ
                    <ul>
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Orders</li>
                        <li>Payments</li>
                    </ul>
                </div>
                <div id="resources" className="footerList">
                    RESOURCES
                    <ul>
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How to- Blog</li>
                        <li>YouTube Playlist</li>
                    </ul>
                </div>
            </div>
            <div id="footerContainer2">
                <div id="container2Text">Shop.co © 2000-2023, All Rights Reserved</div>
                <div id="container2Inner">
                    <img src={Visa}></img>
                    <img src={PayPal}></img>
                    <img src={ApplePay}></img>
                    <img src={GPay}></img>
                </div>
            </div>
        </div>
    );
};

export default Footer;