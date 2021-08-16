import React from 'react';
import './ContactUs.css';
import Footer from "./Footer"

function ContactUs(){
    return(
        <>
        <div className="contact-us mx-5 mt-2">CONTACT US</div><span className="horiLine"></span>
        <div className="row main mx-5 py-4">
            <div className="col-lg-2 contact-button">
                <img className="contact-button-in" src={require('../../images/reacting_logo.png').default}></img>
                <img className="logo-image" src={require('../../images/instagram.png').default}/>
            </div>
            <div className="col-lg-2 contact-button">
            <img className="contact-button-in" src={require('../../images/reacting_logo.png').default}></img>
            <img className="logo-image" src={require('../../images/twitter.png').default}/>
            </div>
            <div className="col-lg-2 contact-button">
            <img className="contact-button-in" src={require('../../images/reacting_logo.png').default}></img>
            <img className="logo-image" src={require('../../images/mail.png').default}/>
            </div>
            <div className="col-lg-2 contact-button">
            <img className="contact-button-in" src={require('../../images/reacting_logo.png').default}></img>
            <img className="logo-image" src={require('../../images/linkedIn.png').default}/>
            </div>
            <div className="col-lg-2 contact-button">
            <img className="contact-button-in" src={require('../../images/reacting_logo.png').default}></img>
            <img className="logo-image" src={require('../../images/facebook.png').default}/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ContactUs;
