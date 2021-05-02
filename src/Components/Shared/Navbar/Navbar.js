
import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
        <>
          <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#">Tanvir</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#blogs">Blogs</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link " href="#contact">Contact</a>
                    </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    );
};

export default Navbar;