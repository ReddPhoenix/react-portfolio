/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './TestHome.css';
import { HashLink as Link } from 'react-router-hash-link';
import Contact from '../Contact/Contact-Form.jsx';

// Icons
import { IconContext } from "react-icons";
import { FaReact } from 'react-icons/fa';
import { VscServer } from 'react-icons/vsc';
import { MdCompareArrows } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { IoMdCodeWorking } from 'react-icons/io';
import { FaDownload } from 'react-icons/fa';
import { Icon } from 'react-icons-kit';
import { database } from 'react-icons-kit/fa/database';
import { paintBrush } from 'react-icons-kit/fa/paintBrush';
import { mobileCombo } from 'react-icons-kit/entypo/mobileCombo';

// Projects
import ChatProject from '../Cards/Project13';
import Taskably2 from '../Cards/Project10';
import Taskably1 from '../Cards/Project1';
import EatDaBurger from '../Cards/Project3';
import EmployeeDirectory from '../Cards/Project4';
import WorkoutTracker from '../Cards/Project5';

function TestHome() {
    return (

        <>
            <div className='Header-Component' >
                {/* <Header className='is-transparent' id='Header' /> */}
            </div>
            <div>
                {/* <!-- Begin Header --> */}
                {/* <div className="header-wrapper" id="home"> */}

                {/* <!-- Begin Hero --> */}
                <section className="hero is-large is-fullheight">
                    {/* <!-- Begin Mobile Nav --> */}
                    {/* <nav className="navbar is-transparent is-hidden-desktop"> */}
                    {/* <!-- Begin Burger Menu --> */}
                    {/* <div className="navbar-brand">
                                <div className="navbar-burger burger" data-target="mobile-nav">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div> */}
                    {/* <!-- End Burger Menu --> */}

                    {/* <div id="mobile-nav" className="navbar-menu">
                                <div className="navbar-end">
                                    <div className="navbar-item">
                                        <a className="navbar-item" href="#home">
                                            Home
            </a>
                                    </div>
                                    <div className="navbar-item">
                                        <a className="navbar-item" href="#about-me">
                                            About Me
            </a>
                                    </div>
                                    <div className="navbar-item">
                                        <a className="navbar-item" href="#services">
                                            Services
            </a>
                                    </div>
                                    <div className="navbar-item">
                                        <a className="navbar-item" href="#skills">
                                            Skills
            </a>
                                    </div>
                                    <div className="navbar-item">
                                        <a className="navbar-item" href="#my-work">
                                            My Work
            </a>
                                    </div>
                                    <div className="navbar-item">
                                        <a className="navbar-item" href="#contact">
                                            Contact
            </a>
                                    </div>
                                </div>
                            </div>
                        </nav> */}
                    {/* <!-- End Mobile Nav --> */}

                    {/* <!-- Begin Hero Content--> */}
                    <div className="hero-body">
                        <div className="container ">
                            <div className="columns">
                                <div className="column is-offset-7">

                                    <h1 className="subtitle">Hey there, I'm</h1>
                                    <h2 className="title">Walter</h2>
                                    <h1 className="subtitle profession">A Full Stack Web Developer</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Hero Content--> */}

                    {/* <!-- Begin Hero Menu --> */}
                    <div className="hero-foot ">
                        <div className="hero-foot--wrapper">
                            <div className="columns">
                                <div className="column is-12 hero-menu-desktop has-text-centered">
                                    <ul>
                                        <li className="is-active">
                                            <Link smooth to="#home">Home</Link>
                                        </li>
                                        <li>
                                            <Link smooth to="#about-me">About Me</Link>
                                        </li>
                                        <li>
                                            <Link smooth to="#services">Services</Link>
                                        </li>
                                        <li>
                                            <Link smooth to="#skills">Skills</Link>
                                        </li>
                                        <li>
                                            <Link smooth to="#my-work">My Work</Link>
                                        </li>
                                        <li>
                                            <Link smooth to="#contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Hero Menu --> */}
                </section>
                {/* <!-- End Hero --> */}
            </div>
            {/* <!-- End Header --> */}

            {/* <!-- Begin Main Content --> */}
            <div className="main-content">

                {/* <!-- Begin About Me Section --> */}
                <div className="section-dark about-me" id="about-me">
                    <div className="container">
                        <div className="column is-12 about-me">
                            <h1 className="title has-text-centered section-title">About Me</h1>
                        </div>
                        <div className="columns is-multiline">
                            <div className="column is-6 is-10-mobile has-vertically-aligned-content is-offset-1-mobile">
                                <p className="is-larger">
                                    &emsp;&emsp;<strong
                                    ><em>Now that you know what I do, how about I tell you who I am? </em></strong>
                                </p>
                                <br />
                                <p >
                                    I use my non-profit organization and management background to develop a rich user experience that stimulates engagement. Through the University of Utah, I earned a certificate in full stack web development, developing skills in JavaScript, CSS, React.js, APIs, SQL/NoSQL databases, and responsive web design. Looking to leverage the fundamentals of web development to create interactive web applications to maximize clients’ and stakeholders’ scalability.
                                </p>
                                <br />
                                <p>
                                    With a passion for problem solving through innovation, I have been able to produce apps using stacks such as MERN that delivers a product using quality-driven teamwork. I worked with a team of four to develop a React.js app that uses role authentication to manage roles of customers and employees providing access to dashboards, appointments, inventory, and chat function (Version 1.0 was awarded Certificate of Recognition for Best UI/UX).
                                </p>
                                <br />
                                <p>
                                    With a combination of technical and soft skills, I would be a strong and welcome addition to your team.
                                </p>
                                <br />
                                <div className="is-divider"></div>
                                <div className="columns about-links">
                                    <div className="column">
                                        <p className="heading has-text-centered-mobile">
                                            <strong>Email Me</strong>
                                        </p>
                                        <p className="subheading has-text-centered-mobile">
                                            wsguerrero@gmail.com
                                        </p>
                                    </div>
                                    <div className="social-media column has-text-centered-mobile">

                                        <a href="https://www.linkedin.com/in/walter-guerrero-7494201a9/" target="_blank" className="button is-light is-large " id='contact-linkedin' rel="noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                        <a href="https://github.com/reddphoenix" target="_blank" className="button is-light is-large" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-mobile is-three-quarters-mobile is-center  right-image is-offset-1-mobile" >
                                <img
                                    className="is-round image" id='aboutMeImage'
                                    src="https://images.unsplash.com/photo-1489945052260-4f21c52268b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                                    alt="Hola LEDs"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End About Me Content --> */}

                {/* Begin Resume Content */}
                <div className="section-dark resume">
                    <div className="container">
                        <div
                            className="columns is-multiline"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <div className="column is-12 about-me">
                                <h1 className="title has-text-centered section-title">
                                    View My Resume
                                    </h1>
                            </div>
                            <div className="column is-10 has-text-centered is-offset-1">
                                <h2 className="subtitle" id='resume-subtitle'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et doloremagna aliqua
                                </h2>
                                <a className='button' target='_blank' rel='noreferrer noopener'
                                    // 2021 April PDF Resume 4.2.21
                                    href='https://drive.google.com/file/d/1O8LBf2PSAyN0VCEy8zbzUuIQQ5gar5Ao/view?usp=sharing'>
                                    Download Resume&emsp;<FaDownload />
                                </a>
                                {/* <form action="example.docs">
                                    <button className="button" target='_blank' rel='noreferrer noopener'
                                        // 2021 April PDF Resume 4.2.21
                                        href='https://drive.google.com/file/d/1O8LBf2PSAyN0VCEy8zbzUuIQQ5gar5Ao/view?usp=sharing'>
                                        Download Resume&emsp;<FaDownload />
                                    </button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Resume Content */}

                {/* <!-- Begin Services Content --> */}
                <div className="section-color services" id="services">
                    <div className="container">
                        <div className="columns is-multiline">
                            <div className="column is-12 about-me">
                                <h1 className="title has-text-centered section-title">Services</h1>

                                <h2 className="subtitle has-text-centered">
                                    Wondering what a full stack web developer such as myself can do for you?  </h2>
                                <br />
                            </div>
                            <div className="columns is-12">
                                <div className="column is-4 has-text-centered">
                                    <Icon size={45} icon={mobileCombo} />
                                    <hr />
                                    <h2>
                                        Responsive web design where your concept appears accurate no matter the screen size
                                    </h2>
                                    <br />
                                </div>
                                <div className="column is-4 has-text-centered">
                                    <Icon size={45} icon={paintBrush} />
                                    <hr />
                                    <h2>
                                        Visuals that engage user experience with CSS3 and Sass
                                    </h2>
                                    <br />
                                </div>
                                <div className="column is-4 has-text-centered">
                                    <Icon size={45} icon={database} />
                                    <hr />
                                    <h2>
                                        Maintain information using either a structured SQL database or a dynamic NoSQL database
                                    </h2>
                                    <br />
                                </div>
                            </div>
                            <br />
                            <div className="columns is-12">
                                <div className="column is-4 has-text-centered">
                                    <IconContext.Provider value={{ size: '2.5em' }}>
                                        <div>
                                            <FaReact />
                                        </div>
                                    </IconContext.Provider>
                                    <hr />
                                    <h2>
                                        MERN (MongoDB Express React Node) Stack navigates application development from user interface to data management
                                    </h2>
                                    <br />
                                </div>
                                <div className="column is-4 has-text-centered">
                                    <IconContext.Provider value={{ size: '2.5em' }}>
                                        <div>
                                            <IoMdCodeWorking />
                                        </div>
                                    </IconContext.Provider>
                                    <hr />
                                    <h2>
                                        Clean, concise and readable code to ensure functionality in your application
                                    </h2>
                                    <br />
                                </div>
                                <div className="column is-4 has-text-centered">
                                    <IconContext.Provider value={{ size: '2.5em' }}>
                                        <div>
                                            <FaLaptopCode />
                                            <MdCompareArrows />
                                            <VscServer />
                                        </div>
                                    </IconContext.Provider>
                                    <hr />
                                    <h2>
                                        API development and integration to leverage applications and web services to your needs
                                    </h2>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Services Content --> */}
                {/* <!-- Begin Skills Content --> */}
                <div className="section-dark skills" id="skills">
                    <div className="container">
                        <div className="columns is-multiline">
                            <div className="column is-12 about-me">
                                <h1 className="title has-text-centered section-title">Skills</h1>
                            </div>
                            <div className="column is-6 is-10-mobile is-offset-1-mobile">
                                <h1>HTML</h1>
                                <progress className="progress" value="80" max="100">80%</progress>
                                <h1>CSS</h1>
                                <progress className="progress" value="85" max="100">85%</progress>
                                <h1>JavaScript</h1>
                                <progress className="progress" value="75" max="100">75%</progress>
                                <h1>MongoDB Express React Node (MERN)</h1>
                                <progress className="progress" value="60" max="100">60%</progress>
                            </div>
                            <div className="column is-6 is-10-mobile is-offset-1-mobile">
                                <h1>API</h1>
                                <progress className="progress" value="67" max="100">67%</progress>
                                <h1>SQL / NoSQL Databases</h1>
                                <progress className="progress" value="60" max="100">60%</progress>
                                <h1>Git</h1>
                                <progress className="progress" value="75" max="100">75%</progress>
                                <h1>Adobe Illustrator / Photoshop</h1>
                                <progress className="progress" value="30" max="100">30%</progress>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Skills Content --> */}
                {/* <!-- Begin Work Content --> */}
                <div className="section-color services" id="my-work">
                    <div className="container">
                        <div className="columns is-multiline">
                            <div className="column is-12">
                                <h1 className="title has-text-centered section-title">My Work</h1>
                            </div>
                            {/* React Slack Clone */}
                            <div className="column is-4-desktop" >
                                <ChatProject />
                            </div>
                            {/* Taskably 2.0 */}
                            <div className="column is-4-desktop" >
                                <Taskably2 />
                            </div>
                            {/* Taskably 1.0 */}
                            <div className="column is-4-desktop" >
                                <Taskably1 />
                            </div>
                            {/* Eat Da Burger! */}
                            <div className="column is-4-desktop" >
                                <EatDaBurger />
                            </div>
                            {/* Employee Directory */}
                            <div className="column is-4-desktop">
                                <EmployeeDirectory />
                            </div>
                            {/* Workout Tracker */}
                            <div className="column is-4-desktop">
                                <WorkoutTracker />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Work Content --> */}

                {/* <!-- Begin Contact Content --> */}

                <div id='contact'>
                    <Contact />
                </div>

                {/* <!-- End Contact Content --> */}
            </div>
            {/* <!-- End Main Content --> */}


            <div className="footer">
                <p>

                    <a href="http://opensource.org/licenses/mit-license.php">MIT License</a>. The website content is licensed
                        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </>


    )
}

export default TestHome;


