import React from 'react';
import Hero from "../Hero";
import melanieimage from "../../assets/img/melanieimage.jpg";

function About() {
    return (
        <div>
            <Hero></Hero>   
        
        
        <div className="jumbotron">
            
          
            <div className="row">
                <div className="col-12 col-md-2">
                <img id='melanie-portrait' src={melanieimage} className="my-2" style={{ width: "100%" }} alt="cover" />
                </div>
                <div id="about-heading" className="col-12 col-md-10">
                    <h3 className="display-3">About Me</h3>
                    <p className="lead">
                      I am new to the development field and very eager to learn all I can. The idea of working with other professionals to create and build applications that will help people and or positively impact their lives drives me to grow stronger in this field. Completing a full stack coding bootcamp has allowed me to have experience with many technologies and dependencies that are in high demand such as SQL, React, MongoDB, and more. What i lack in experience I will make up for in dependability and a very strong self motivation to develop any skills needed for a job. I look forward to connecting with you!
                    </p>
                </div>

            </div>

            <hr className="my-4" />
            </div>
        </div>
    )
}

export default About;