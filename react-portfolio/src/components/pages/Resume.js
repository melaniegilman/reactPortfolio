import React from 'react';
import melanieresume from '../../assets/google_doc_resume.pdf';
import Hero from "../Hero";

function Resume() {
    return (
        <div id="resume-card" className="m-5" style={{ border: "none" }}>
            <Hero />
            <div className="row">
                <ul className="list-unstyled col-12 col-md-4" >
                    <li className="h2">Front-End Proficiencies</li>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </ul>
                <ul className="list-unstyled col-12 col-md-4" >
                    <li className="h2">Back-End Proficiencies</li>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                    </ul>
                </ul>

                <div id="resume-download" className="text-center col-11 col-md-4" style={{ border: "none" }}>
                    <h2>Click here to download my Full Resume</h2>

                   <a href={melanieresume} download class="link"><i className="far fa-file-pdf fa-7x mx-auto" style={{ width: "100px" }}></i></a>
                </div>
            </div>
        </div>
    )
}

export default Resume;