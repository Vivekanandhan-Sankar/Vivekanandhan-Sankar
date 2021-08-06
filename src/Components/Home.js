import { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import array from "../Components/array"

import '../Styles/Home.css'

class Home extends Component{
    render(){
        return(
            <div>
                <section id="slider">
		             
		             <input type="radio" name="slider" id="s2"checked/>
		             <input type="radio" name="slider" id="s3"checked/>
		             <input type="radio" name="slider" id="s4"checked/>
	                 <input type="radio" name="slider" id="s5"checked/>
                     <input type="radio" name="slider" id="s1"checked/>
		             <label for="s1" id="slide1">
                        <video  src={require("../images/initialVideo.mp4").default} loop autoPlay muted width="100%" height="100%">
		                </video>
                     </label>
		             <label for="s2" id="slide2"><img src={require('../images/suryaPoster.jpg').default}/></label>
		             <label for="s3" id="slide3"><img src={require('../images/cybernautPoster.jpeg').default}/></label>
		             <label for="s4" id="slide4"><img src={require('../images/drinks.png').default}/></label>
		             <label for="s5" id="slide5"><img src={require('../images/snacks.png').default}/></label>
	            </section>
               <div className="joinCommunity container mb-4 mt-3">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-12">
                        <span className="jCques">Want to help people but don't know where to start ?</span><br/>
                        That's where we come in, we are a group of youngsters
                        who help students to pursue their jobs and skills
                       </div>
                       <div className="col-12 col-md-6 col-lg-5 join-link-div">
                          <a className="joinLink">JOIN OUR COMMUNITY</a>
                       </div>
                    </div>
                </div>
                <h4 className="recent">RECENT</h4><span className="horiLine"></span>
                <h4 className="announcements">ANNOUNCEMENTS</h4>
                <div className="scroll container mb-3">
                   <div className="row">
                       <div className="col-lg-10 col-md-10 col-12 outer-border-announce">
                       <div className="border-announce">
                           <ul className="list-announcement">
                           {
                               array.map((item)=>{
                                   return <li className="announce-list">
                                       <div className="row">
                                       <div className="col-3 announcement-logo">
                                       <img src={require("../images/reacting_logo.png").default}/>
                                       </div>
                                       <div className="col-8 announcement-content">
                                           {item.content}
                                           <div style={{marginTop:"36px"}}><a className="regHere">Register Here</a></div>
                                       </div>
                                       </div>
                                   </li>
                               })
                           }
                           </ul>
                       </div>
                       </div>
                       <div className="col-lg-2 col-md-2 col-12 bigger-announce">
                           <p className="size-1">The</p><p className="size-2">Last date</p><p className="size-3">To</p><p className="size-2">Register for</p>
                           <p className="size-4">The</p><p className="size-2">Workshop</p><p className="size-3">is XYZ.</p><p className="size-2">So seize</p>
                           <p className="size-5">this</p><p className="size-1">chance</p><p className="size-2">quickly.</p>
                       </div>
                   </div>
                </div>
                <div className="weekly container mb-5 p-4">
                    <h4 className="recent">WEEKLY</h4><span className="horiLine"></span>
                    <h4 className="announcements">WEBINARS</h4>
                    <div className="row">
                        <div className="col-6 mt-3 poster">

                        </div>
                       <div className="col-5 mt-3">
                          <div></div>
                          <a className="webinarLink px-5">LINK</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;