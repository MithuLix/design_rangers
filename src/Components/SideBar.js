import { faStar, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import levelOne from "../images/level one seller.png";
import React from 'react';

const SideBar = () => {
    return (
        <div className="SideBar BoxShadow p-3">
            <div className="imageDiv">
                <img className="image " src="https://i.ibb.co/q7vHS55/download-29.png" alt="" srcset="" />
                <div><li className="li textColor"> online</li></div>
                <img className="levelSeller" src={levelOne} alt="" srcset="" />
            </div>
            <h5><strong>design_rangers</strong> </h5>
            <p>Your satisfaction is my first priority!</p>
            <p className="pStar">
                <span className="starColor"><FontAwesomeIcon icon={faStar} /></span> <span className="starColor"><FontAwesomeIcon icon={faStar} /></span> <span className="starColor"><FontAwesomeIcon icon={faStar} /></span > <span className="starColor"><FontAwesomeIcon icon={faStar} /></span> <span className="starColor"><FontAwesomeIcon icon={faStar} /></span>
                <span style={{ fontSize: '13px' }}> (39 reviews)</span>
            </p>
            <div className="justify-content-center" activeKey="/home">
                <a className="px-3 py-1 textColor order" href="https://www.fiverr.com/design_rangers?up_rollout=true" target="_blank" alt="Fiverr" rel="noreferrer">
                    Contact Me
                </a>
            </div>
            <hr />
            <div className="skills">
                <h6><strong>Skills</strong> </h6>
                <p>
                    <span className="span">Illustration</span>
                    <span className="span"> Step by Step Illustration</span><br />
                    <span className="span">instruction manual</span>
                    <span className="span">technical drawing</span><br />
                    <span className="span">Workout Instruction Manual</span><br />
                    <span className="span">product manual</span>
                    <span className="span">Step by Step drawing</span><br />
                    <span className="span">Facebook advertising</span>
                    <span className="span">Facebook ads</span><br />
                    <span className="span">Facebook image</span>
                    <span className="span">line art</span>
                    <span className="span">Facebook- marketing</span>
                    <span className="span">Illustrator</span>
                    <span className="span">Photoshop</span>
                </p>
            </div>
            <hr />
            <div className="skills">
                <h6><strong>About Me</strong> </h6>
                <p style={{ fontSize: "14px", marginLeft: '10px' }}>
                    Hi, I'm an illustration specialist. professionally trained as a Fiverr seller. Boost your sales with outstanding illustrations. Best budget-friendly service. Satisfaction guaranteed. Ask me anything!
                </p>
            </div>
            <hr />
            <div className="skills">
                <h6><strong>Education & Certificate</strong> </h6>
                <p style={{ fontSize: "14px", marginLeft: '10px' }}>
                    <strong> B.Sc. - multimedia designer</strong><br />
                    Daffodil International University, Bangladesh <br /> Graduated 2019
                </p>
                <p style={{ fontSize: "14px", marginLeft: '10px' }}>
                    <strong>Adobe Illustrator</strong><br />
                    Adobe 2019
                </p>
            </div>
        </div>
    );
};

export default SideBar;