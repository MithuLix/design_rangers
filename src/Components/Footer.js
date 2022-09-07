import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="Navbar BoxShadow  p-2">
            <Nav className="justify-content-center" activeKey="/home">
                <a className="px-3 textColor order" href="https://www.fiverr.com/design_rangers?up_rollout=true" target="_blank" alt="Fiverr" rel="noreferrer">
                    Order Now On Fiverr &nbsp; <FontAwesomeIcon icon={faPaperPlane} />
                </a>
            </Nav>

            <Nav className="justify-content-center">
                <a style={{ fontWeight: '400' }}> Contact: Mohaiminul628@gmail.com </a>
            </Nav>
            <hr />
            <Nav className="justify-content-center">
                <p style={{ fontSize: '13px' }}>Copyright &copy;2020 Mohaiminul. All rights reserved.</p>
            </Nav>
        </div >
    )
}

export default Footer;
