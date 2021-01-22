import React from 'react';
import melanieresume from '../../assets/Melanie_Gilman_Resume_3.PDF';
// import Hero from "../Hero";

function Resume() {
    return (
        <div id="resume-card" className="resume" style={{ border: "none" }}>
            {/* <Hero /> */}
            <div className="row resrow">
                {/* <ul className="list-unstyled col-12 col-md-4" >
                    <li className="h2">-Front-End Proficiencies-</li>
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
                    <li className="h2">-Back-End Proficiencies-</li>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                    </ul>
                </ul> */}

                <div id="resume-download" className="text-center col-11 " style={{ border: "none"  }}>
                    <h2>-Click To Download My Resume-</h2>

                   <a href={melanieresume} download class="link"><i className="far fa-file-pdf fa-7x mx-auto" style={{ width: "100px" , color: " rgb(120, 129, 120)"}}></i></a>
                </div>
            </div>
        </div>
    )
}

export default Resume;