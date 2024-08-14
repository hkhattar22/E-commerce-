import React from 'react';
import './footer.css'
import Logo from '../../Assets/logo.png';
import 'boxicons';

const Newsletter = () => {

    return (
        <div id="newsletter">
            <div id="newsletterText">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
            <div id="newsletterInput">
                <div className="inputemail">
                    <box-icon name='envelope' color="#606060" size="18px"></box-icon>
                    <input type="email" placeholder='Enter your email address'></input>
                </div>
                <button className="inputemail">Subscribe to Newsletter</button>
            </div>
        </div>
    )
};

export default Newsletter;