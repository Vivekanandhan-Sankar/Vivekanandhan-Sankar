import React from "react";
import './AboutUs.css';
import Persons from "./Persons";
import Footer from "../ContactUS/Footer";

function AboutUs(){
        return(
            <>
                <div className=" about-us-box px-3 py-3 mx-5 my-4">
                <h6 className="about-us">ABOUT US</h6><span className="horiLine"></span>
                <h6 className="who-we-are">WHO WE ARE</h6>
                <p>Everyone has a desire to help people. But only a few can show it in action.
                    In that way, a group of like minded people took a step forward to join with a
                     one man organization and Cybernaut was developed.
                </p>
                <div className="row">
                    <div className="col-12 col-lg-4 mb-3">
                        <img className="group-image" src={require('../../images/suryaPoster.jpg').default}/>
                    </div>
                    <div className="col-12 col-lg-8 mb-3">
                        <p><span className="highlight">CYBERNAUT</span> - Endeavour to explore, was primarily started as a club and now, 
                            it has officially been declared as a startup community registered under 
                            MSME Our clear cut focus is to bring forth equal education to everyone 
                            irrespective of them being rich or poor. As some of the school students 
                            are not getting the right guidance, we are lending our hands to helping 
                            them choose the best career path and to develop their character.</p>
                        <p>Our key motto is <span className="highlight">"Sharing our knowledge to expand others knowledge."</span>
                            Nowadays, technology is everywhere. No one can survive without any 
                            technologyit has been an important aspect of everyone's fe As these 
                            innovations are changing on a daily basis, everyone has to be updating 
                            themselves about these technologies in that respect our community is 
                            conducting webinars to the freshers of all universities about the 
                            cutting edge technologies
                        </p>
                    </div>
                </div>
                </div>
                <div className="row vis-and-mis mx-5 mb-4">
                    <div className="col-12 col-md-6 col-lg-6 mt-4"><div className="vission  px-4 py-3"><div id="vis-heading">Vision</div>
                       <p style={{'margin-bottom':'1vh'}}>We give skilled people, an opportunity to practically implement their skills in the field You 
                           can also be a fresher with basic knowledge and we are here to help and guide you to develop 
                           your skillnet Service is our main aim, we also have other domains such as content writing, 
                           graphic design, etc.</p>
                        <p className="keypoints">Our Keypoints of foucus are:</p>
                        <ul>
                            <li>To approach government schools and to aid the students with career advice</li>
                            <li>To encourage the students to pic- the right path on the technical side.</li>
                            <li>To improve the student's personality on the non-technical side</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-4"><div className="mission  px-4 py-3"><div id="mis-heading">Mission</div>
                        <p>You might be wondering about the benefits of joining. We give an internship certificate at the end 
                            one month after joining. You can add your experiences to your resume which will be very 
                            helpful to impress your interviewer. And you can have a lot of personal development in 
                            this community by meeting and mingling with many young minds.</p>
                        <p>Furthermore, we conduct webinars on the latest technology and non-technical 
                            skills as well which helps you develop completely.</p>
                        <div className="read-more-div"><span className="read-more">READ MORE</span></div>
                        </div>
                    </div>
                </div>
                <Persons />
                <Footer />
            </>
            
        );
}

export default AboutUs; 