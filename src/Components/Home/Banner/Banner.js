import React from 'react';
import './Banner.css'
import Typing from 'react-typing-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../Shared/Navbar/Navbar'
import resume from '../../../RESUME.pdf'
const Banner = () => {
    const downloadResume = ()=> {
        window.location.href = "https://drive.google.com/file/d/1LqPguLaK5r6K6oOUf556ZDmB56tvqPw_/view?usp=sharing"

    }
    return (
        <div className="banner-section" id="home">
            <div className="container">
            <Navbar></Navbar>
            <div className="banner-body">
                <div className="banner-title">
                    <h1>I'm <br></br><span>Deluwar Hussen Tanvir</span></h1>
                    <Typing loop>
                        <h4>Full Stack Developer</h4>
                        <Typing.Delay ms={1000}  />
                        <Typing.Backspace count={20} />
                        <h4>React Developer</h4>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={15} />
                        <h4>Programmer</h4>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={10} />
                        <Typing.Reset />
                    </Typing>
                </div>
                <button className="work-button">View My Work <FontAwesomeIcon className="ml-2  arrow-icon" icon={faArrowRight} /></button>
                <a href={resume} download="Resume|Tanvir" target='_blank'>
                    <button className="resume-button" target="_blank">Download Resume <FontAwesomeIcon  className="ml-2" icon={faDownload} /></button>
                </a>
                
            </div>
            </div>
        </div>
    );
};

export default Banner;