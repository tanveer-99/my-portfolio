import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Projects from '../Projects/Projects'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;