import React from 'react';
import './Projects.css';
import eBazar from '../../../images/E-Bazar.jpg'
import lensShots from '../../../images/Lens-Shots.jpg';
import cityRider from '../../../images/City-Rider.jpg';

const Projects = () => {
    return (
        <div className="projects-section" id="projects">
            <div className="container">
                <div className="projects">
                    <h2 className="projects-title">Projects</h2>
                    <div className="row">
                        <div className="col-md-4">

                            <div className="projects-card">
                                <img src={eBazar}></img>
                                <div className="project-info">
                                    <div className="text-center">
                                        <h3 className="project-name">E-Bazar</h3>
                                        <a href="https://e-bazar-ce163.web.app" target="_blank" className="live-site-button">Open</a>
                                        <a href="https://github.com/tanveer-99/E-Bazar-Client" target="_blank"  className="view-code-button">Code</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="projects-card">
                                <img src={lensShots}></img>
                                <div className="project-info">
                                    <div className="text-center">
                                        <h3 className="project-name">Lens-Shots</h3>
                                        <a href="https://lens-shots.firebaseapp.com" target="_blank"  className="live-site-button">Open</a>
                                        <a href="https://github.com/tanveer-99/Lens-Shots-Client" target="_blank"  className="view-code-button">Code</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="projects-card">
                                <img src={cityRider}></img>
                                <div className="project-info">
                                    <div className="text-center">
                                        <h3 className="project-name">City-Rider</h3>
                                        <a href="https://riding-app-react.web.app" target="_blank"  className="live-site-button">Open</a>
                                        <a href="https://github.com/tanveer-99/City-Rider" target="_blank"  className="view-code-button">Code</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="text-center mt-5">
                    <button className="mx-auto resume-button">See All Projects</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;