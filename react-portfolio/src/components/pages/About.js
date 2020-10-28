import React from 'react';

function About() {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-12 col-md-2">
                    <img id="melanie-portrait" className="" src={require("../../assets/img/melanieimage.jpg")} 
                        alt="An image of Melanie Gilman"/>
                </div>
                <div id="about-heading" className="col-12 col-md-10">
                    <h1 className="display-3">About Me</h1>
                    <p className="lead">
                      I am new to the development field and very eager to learn all I can.  The idea of working with other professionals to create and build applications that will help people and or positively impact their lives drives me to grow stronger in this field.
                    </p>
                </div>

            </div>

            <hr className="my-4" />
            <h4>Experience</h4>
            <p>
            Insert Text
            </p>
        </div>
    )
}

export default About;