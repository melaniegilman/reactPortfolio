import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="d-flex justify-content-center">    
                <a className="btn btn-outline-dark btn-social mx-1" 
                    href="https://github.com/melaniegilman" target="blank">
                        <i className="fab fa-fw fa-github fa-lg"></i></a>
                <a className="btn btn-outline-dark btn-social mx-1" 
                    href="https://www.linkedin.com/in/melanie-gilman-7058161a8/" target="blank">
                        <i className="fab fa-fw fa-linkedin-in fa-lg"></i></a>
            </div>
            <span className="d-flex justify-content-center text-muted mx-auto">
                Copyright © Melanie Gilman 2020
            </span>
        </footer>
    )
}

export default Footer;