import React from 'react'
import './TestHome.css';
import { HashLink as Link } from 'react-router-hash-link';
import Contact from '../Contact/Contact-Form.jsx';
import { IconContext } from "react-icons";
import { FcSmartphoneTablet } from 'react-icons/fc';
import { FaReact } from 'react-icons/fa';
import { BiTransferAlt } from 'react-icons/bi';
import { VscServer } from 'react-icons/vsc';
import { MdCompareArrows } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { IoMdCodeWorking } from 'react-icons/io';
import { FaDownload } from 'react-icons/fa';


import { Icon } from 'react-icons-kit';
import { database } from 'react-icons-kit/fa/database';
import { paintBrush } from 'react-icons-kit/fa/paintBrush';
import { laptop } from 'react-icons-kit/fa/laptop';
import { tablet } from 'react-icons-kit/fa/tablet';
import { mobilePhone } from 'react-icons-kit/fa/mobilePhone';
import { arrowRight } from 'react-icons-kit/fa/arrowRight';
import { mobileCombo } from 'react-icons-kit/entypo/mobileCombo';



// import Video from '../../assets/home/smoke.mp4';

// import Header from '../Header/Header.jsx';

// Projects
// import Chat from '../../assets/projects/ChatTest.gif';
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
                {/* <!-- Begin Preloader --> */}
                {/* <div className="preloader-wrapper">
                <div className="preloader">
                    <img src="img/preloader.gif" alt="" />
                </div>
            </div> */}
                {/* <!-- End Preloader--> */}

                {/* <!-- Begin Scroll Up Button --> */}

                {/* <form action="#home">
                    <button id="toTop" title="Go to top">
                        <i className="fas fa-angle-up"></i>
                    </button>
                </form> */}
                {/* <!-- End Scroll Up Button --> */}

                {/* <!-- Begin Header --> */}
                {/* <div className="header-wrapper" id="home"> */}
                {/* <!-- Begin Hero --> */}
                <section className="hero is-large">
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
                                            <Link smooth to ="#home">Home</Link>
                                        </li>
                                        <li>
                                            <Link smooth to ="#about-me">About Me</Link>
                                        </li>
                                        <li>
                                            <Link smooth to="#services">Services</Link>
                                        </li>
                                        <li>
                                            <Link smooth to ="#skills">Skills</Link>
                                        </li>
                                        <li>
                                            <Link smooth to ="#my-work">My Work</Link>
                                        </li>
                                        <li>
                                            <Link smooth to ="#contact">Contact</Link>
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
                            <div
                                className="column is-6 has-vertically-aligned-content"
                                data-aos="fade-right"
                            >
                                <p className="is-larger">
                                    &emsp;&emsp;<strong
                                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, beatae? </strong>
                                </p>
                                <br />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae, voluptatibus iusto animi accusamus eaque adipisci nemo? Dicta neque, numquam, sit, perspiciatis voluptatem dolore asperiores aliquid aperiam quasi at esse!
          </p>
                                <br />
                                <div className="is-divider"></div>
                                <div className="columns about-links">
                                    {/* <div className="column">
                                        <p className="heading">
                                            <strong>Give me a ring</strong>
                                        </p>
                                        <p className="subheading">
                                            123-456-7890
                                        </p>
                                    </div> */}
                                    <div className="column">
                                        <p className="heading">
                                            <strong>Email Me</strong>
                                        </p>
                                        <p className="subheading">
                                            wsguerrero@gmail.com
              </p>
                                    </div>
                                    <div className="column">
                                        <p className="heading">
                                            <strong>View my GitHub Portfolio</strong>
                                        </p>
                                        <p className="subheading">
                                            https://github.com/ReddPhoenix
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-6 right-image " data-aos="fade-left">
                                <img
                                    className="is-rounded"
                                    src="https://images.unsplash.com/photo-1489945052260-4f21c52268b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End About Me Content --> */}
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
                                <form action="example.docs">
                                    <button className="button" target='_blank' rel='noreferrer noopener'
                                        // 2021 April PDF Resume 4.2.21
                                        href='https://drive.google.com/file/d/1O8LBf2PSAyN0VCEy8zbzUuIQQ5gar5Ao/view?usp=sharing'>
                                        Download Resume&emsp;<FaDownload />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Begin Services Content --> */}
                <div className="section-color services" id="services">
                    <div className="container">
                        <div className="columns is-multiline">
                            <div
                                className="column is-12 about-me"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <h1 className="title has-text-centered section-title">Services</h1>

                                <h2 className="subtitle">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </h2>
                                <br />
                            </div>
                            <div className="columns is-12">
                                <div
                                    className="column is-4 has-text-centered"
                                    data-aos="fade-in"
                                    data-aos-easing="linear"
                                >
                                    <Icon size={45} icon={mobileCombo} />
                                    {/* <Icon size={45} icon={laptop} />
                                    <Icon size={32} icon={arrowRight} /> */}
                                    {/* <Icon size={35} icon={tablet} />
                                    <Icon size={15} icon={arrowRight} /> */}
                                    {/* <Icon size={45} icon={mobilePhone} /> */}
                                    <i className="fad fa-meteor fa-3x"></i>
                                    <hr />
                                    <h2>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        </h2>
                                </div>
                                <div
                                    className="column is-4 has-text-centered"
                                    data-aos="fade-in"
                                    data-aos-easing="linear"
                                >
                                    <Icon size={45} icon={paintBrush} />
                                    {/* <i className="fas fa-paint-brush fa-3x"></i> */}
                                    <hr />
                                    <h2>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        </h2>
                                </div>
                                <div
                                    className="column is-4 has-text-centered"
                                    data-aos="fade-in"
                                    data-aos-easing="linear"
                                >
                                    <Icon size={45} icon={database} />
                                    {/* <i className="fas fa-rocket fa-3x"></i> */}
                                    <hr />
                                    <h2>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        </h2>
                                </div>
                            </div>
                            <hr />
                            <div className="columns is-12">
                                <div
                                    className="column is-4 has-text-centered"
                                    data-aos="fade-in"
                                    data-aos-easing="linear"
                                >
                                    <IconContext.Provider value={{ size: '2.5em' }}>
                                        <div>
                                            <FaReact />
                                        </div>
                                    </IconContext.Provider>
                                    {/* <i className="fas fa-upload fa-3x"></i> */}
                                    <hr />
                                    <h2>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        </h2>
                                </div>
                                <div
                                    className="column is-4 has-text-centered"
                                    data-aos="fade-in"
                                    data-aos-easing="linear"
                                >
                                    <IconContext.Provider value={{ size: '2.5em' }}>
                                        <div>
                                            <IoMdCodeWorking />
                                        </div>
                                    </IconContext.Provider>



                                    {/* <i className="fas fa-bus fa-3x"></i> */}
                                    <hr />
                                    <h2>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        </h2>
                                </div>
                                <div
                                    className="column is-4 has-text-centered"
                                    data-aos="fade-in"
                                    data-aos-easing="linear"
                                >
                                    <IconContext.Provider value={{ size: '2.5em' }}>
                                        <div>
                                            <FaLaptopCode />
                                            <MdCompareArrows />
                                            <VscServer />
                                        </div>
                                    </IconContext.Provider>
                                    <hr />
                                    <h2>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        </h2>
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
                            <div
                                className="column is-6"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <h1>Adobe Experience Design</h1>
                                <progress className="progress" value="70" max="100">30%</progress>
                                <h1>Adobe After Effects</h1>
                                <progress className="progress" value="65" max="100">30%</progress>
                                <h1>Visual Studio Code</h1>
                                <progress className="progress" value="58" max="100">45%</progress>
                                <h1>Sketch</h1>
                                <progress className="progress" value="90" max="100">60%</progress>
                            </div>
                            <div
                                className="column is-6"
                                data-aos="fade-in"
                                data-aos-easing="linear"
                            >
                                <h1>HTML</h1>
                                <progress className="progress" value="85" max="100">30%</progress>
                                <h1>CSS</h1>
                                <progress className="progress" value="95" max="100">30%</progress>
                                <h1>VueJS</h1>
                                <progress className="progress" value="70" max="100">45%</progress>
                                <h1>React</h1>
                                <progress className="progress" value="60" max="100">60%</progress>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Skills Content --> */}
                {/* <!-- Begin Work Content --> */}
                <div className="section-color services" id="my-work">
                    <div className="container">
                        <div
                            className="columns is-multiline"
                            data-aos="fade-in"
                            data-aos-easing="linear"
                        >
                            <div className="column is-12">
                                <h1 className="title has-text-centered section-title">My Work</h1>
                            </div>
                            {/* React Slack Clone */}
                            <div className="column is-4">
                                <ChatProject />
                                {/* <a href="/#">
                                    <figure
                                        className="image is-2by1 work-item"
                                        image={Chat}
                                    ></figure>
                                </a> */}
                            </div>
                            {/* Taskably 2.0 */}
                            <div className="column is-4">
                                <Taskably2 />
                                {/* <a href="/#">
                                    <figure
                                        className="image is-2by1 work-item"
                                        src='https://picsum.photos/320/180?image=10'
                                    ></figure>
                                </a> */}
                            </div>
                            {/* Taskably 1.0 */}
                            <div className="column is-4">
                                <Taskably1 />
                                {/* <a href="/#">
                                    <figure
                                        className="image is-2by1 work-item"
                                        src='https://picsum.photos/320/180?image=20'
                                    ></figure>
                                </a> */}
                            </div>
                            {/* Eat Da Burger! */}
                            <div className="column is-4">
                                <EatDaBurger />
                                {/* <a href="/#">
                                    <figure
                                        className="image is-2by1 work-item"
                                        src='https://picsum.photos/320/180?image=30'
                                    ></figure>
                                </a> */}
                            </div>
                            {/* Employee Directory */}
                            <div className="column is-4">
                                <EmployeeDirectory />
                                {/* <a href="/#">
                                    <figure
                                        className="image is-2by1 work-item"
                                        src='https://picsum.photos/320/180?image=40'
                                    ></figure>
                                </a> */}
                            </div>
                            {/* Workout Tracker */}
                            <div className="column is-4">
                                <WorkoutTracker />
                                {/* <a href="/#">
                                    <figure
                                        className="image is-2by1 work-item"
                                        src='https://picsum.photos/320/180?image=50'
                                    ></figure>
                                </a> */}
                            </div>
                            {/* <div className="column is-3">
                                <a href="/#">
                                    <figure
                                        className="image is-2by1 work-item"
                                        src='https://picsum.photos/320/180?image=60'
                                    ></figure>
                                </a>
                            </div>
                            <div className="column is-3">
                                <a href="/#">
                                    <figure
                                        className="image is-2by1 work-item"
                                        src='https://picsum.photos/320/180?image=70'
                                    ></figure>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- End Work Content --> */}

                {/* <!-- Begin Contact Content --> */}
                
                <div id='contact'>
                    <Contact />
                </div>
                {/* <div className="section-light contact" id="contact">
                    <div className="container">
                        <div
                            className="columns is-multiline"
                            data-aos="fade-in-up"
                            data-aos-easing="linear"
                        >
                            <div className="column is-12 about-me">
                                <h1 className="title has-text-centered section-title">
                                    Get in touch
                                    </h1>
                            </div>
                            <div className="column is-8 is-offset-2">
                                <form
                                    action="https://formspree.io/email@example.com"
                                    method="POST"
                                >
                                    <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control has-icons-left">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Ex. Jane Smith"
                                                name="Name"
                                            />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control has-icons-left">
                                            <input
                                                className="input"
                                                type="email"
                                                placeholder="Ex. hello@arctheme.com"
                                                name="Email"
                                            />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Message</label>
                                        <div className="control">
                                            <textarea
                                                className="textarea"
                                                placeholder="Textarea"
                                                name="Message"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control ">
                                            <button className="button submit-button">
                                                Submit&nbsp;&nbsp;
                  <i className="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
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

export default TestHome


