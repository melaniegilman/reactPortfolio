import React from 'react';
// import melanie_resume from '../../assets/melanie_resume.pdf';

function Resume() {
    return (
        <div id="resume-card" className="card m-5" style={{border: "none"}}>
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

                <div id="resume-download" className="text-center col-11 col-md-4" style={{border: "none"}}>
                    <h2>Click here to download my Full Resume</h2>
                    <a href={require("../../assets/melanie_resume.pdf")} download>
                    {/* <a href="../../assets/melanie_resume.pdf" src={melanie_resume} download> */}
                    <i className="far fa-file-pdf fa-7x mx-auto" style={{width: "100px"}}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Resume;