import React, { Component } from 'react';
import Contact from '../Contact/Contact-Form';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../Home/styles/home-styles.css';

const Video = './assets/home/ocean-video2.mp4'
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

                    <Contact />
                    <hr className='content-divider' />
                    <div className='footer' >
                        <Footer />
                    </div>
                </section>
            </>
        )
    }
}


export default Home;


