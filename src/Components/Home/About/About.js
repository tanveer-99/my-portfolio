import React from 'react';
import './About.css'
import image from '../../../images/image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div className="about-section" id="about">
           <div className="container">
                <div className="about shadow">
                    <h2 className="about-title ml-5">About Me</h2>
                    <div className="row pl-5">

                        <div className="col-md-5 col-lg-5 pr-5 mb-5 d-flex flex-column justify-content-center align-items-center" style={{lineHeight: 2}}>
                                <img src={image} alt=""></img>
                                <p>An enthusiastic full stack web developer with a background of CSE who
                                    loves to take challenges and is determined to complete the task at any cost.
                                    Experienced with HTML, CSS, Javascript, React, react-bootstrap, Firebase,
                                    Node.js, express.js, MongoDB, and a lot more.
                                    Loves to learn new things for the requirement of any project.
                                </p>
                                <button className="resume-button mt-0" target="_blank">Download Resume <FontAwesomeIcon  className="ml-2" icon={faDownload} /></button>
                        </div>

                        <div className="col-md-7 col-lg-7 pr-5">
                                
                            <div className="d-flex  mb-1">
                                <h6 className="mr-3">HTML</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar html-bar bg-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>   
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">CSS</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar css-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>  
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">Javascript</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar js-bar bg-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>  
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">Bootstrap</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar bootstrap-bar bg-warning" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>  
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">Material-UI</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar node-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">React</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar react-bar bg-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>  
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">MongoDB</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar mongo-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                </div>
                            </div>  
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">Node.js</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar node-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div> 
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">Express.js</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar react-bar bg-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>  
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">Firebase</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar fire-bar bg-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </div>   
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">Github</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar git-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </div>  
                            <div className="d-flex mb-1">
                                <h6 className="mr-3">C++</h6>
                                <div class="progress w-100">
                                    <div className="progress-bar react-bar bg-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>  
                        
                        </div>
                        
                    </div>
                </div>
           </div>
        </div>
    );
};

export default About;