import React from 'react';
import melanieresume from '../../assets/Melanie_Gilman_Resume_3.PDF';
// import Hero from "../Hero";

function Resume() {
    return (
        <div id="resume-card" className="resume container" style={{ border: "none" }}>
            {/* <Hero /> */}
            <div className="resrow">
                <div id="resume-download" className="text-center col-11 " style={{ border: "none"  }}>
                    <h2>Click To Download My Resume</h2>

                   <a href={melanieresume} download class="link"><i className="far fa-file-pdf fa-7x mx-auto" style={{ margin: "20px" , width: "100px" , color: " rgb(120, 129, 120)"}}></i></a>
                </div>
            </div>
        </div>
    )
}

export default Resume;