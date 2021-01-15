import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './styles/home-styles.css';

const Video = '/assets/home/smoke.mp4'
const Logo = './assets/home/walter-guerrero-3.png'
class Home extends Component {
    render() {
        return (
            <>
                <section className="hero is-info is-fullheight">
                    <div className="fullscreen-video-wrap video-container " >
                        <video
                            autoPlay
                            loop
                            muted
                            style={{
                                position: 'fixed',
                                width: '100%',
                                left: '50%',
                                top: '50%',
                                height: '100%',
                                objectFit: 'cover',
                                transform: 'translate(-50%, -50%',
                                zIndex: '-1'
                            }}>
                            <source src={Video} autoPlay={true} loop={true} muted type='video/mp4' />
                        </video>
                    </div>

                    <Header />

                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="column is-10 is-offset-1">
                                <img src={Logo} alt="Logo" height='50' className='column is 8 ' id='logo' />
                                <h2 className="title">
                                    Salt Lake City, Utah
                            </h2>
                                <h3 className="subtitle">
                                    Working in the civic & social organization industry has motivated me to find ways to create solutions for structured success. As a full stack web developer I'm able to recognize the need for businesses to implement technology that benefits both them and their customer base.
                            </h3>
                                <a className="button is-info contact-button" href='contact'>
                                    Click Here To Contact Me
                                </a>
                            </div>
                            <hr className='content-divider' />
                            <div className='footer' >
                                <Footer />
                            </div>
                        </div>
                    </div>

                </section>



            </>
        )
    }
}


export default Home;


