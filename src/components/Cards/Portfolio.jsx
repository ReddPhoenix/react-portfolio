import React, { Component } from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import Project7 from './Project7';
import Project8 from './Project8';
import Project9 from './Project9';
import Project10 from './Project10';
import Project11 from './Project11';
import Project12 from './Project12';
import Project13 from './Project13';
import { Link } from 'react-router-dom';
import '../../../src/styles.css';
import '../Cards/styles/Project.css';
import '../Home/styles/home-styles.css';
import image1 from '../../assets/home/dots.jpg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Parallax } from 'react-parallax'


class Portfolio extends Component {
  render() {
    return (
      <div className='Home'>
        <Parallax bgImage={image1} strength={700}>
          <div>
            <Header />
            <div className="container">
              <div className="section">
                <div className="columns">
                  <div className="column has-text-centered">
                    <h1 className="title" >Portfolio</h1>
                    <h2 className='subtitle'>A collection of projects using various front and back end technologies <br />such as React, Bulma, Material-UI, Javascript, and multiple databases </h2>
                    <br />
                    <h6 className='subtitle'>{'{Enjoy the Parallax Background Effect by scrolling slowly}'}</h6>
                    <br />
                  </div>
                </div>


                <div id='app' className='row columns is-multiline' >

                  <div className='column is-4 Card ' align="center">
                    <Project13 />
                  </div>

                  <div className='column is-4 Card ' align="center">
                    <Project10 />
                  </div>

                  <div className='column is-4 Card ' align="center">
                    <Project1 />
                  </div>

                  <div className='column is-4 Card' align="center">
                    <Project3 />
                  </div>

                  <div className='column is-4 Card' align="center">
                    <Project4 />
                  </div>

                  <div className='column is-4 Card' align="center">
                    <Project5 />
                  </div>

                  <div className='column is-4 Card' align="center">
                    <Project6 />
                  </div>

                  <div className='column is-4 Card' align="center">
                    <Project2 />
                  </div>
                  <div className='column is-4 Card' align="center">
                    <Project7 />
                  </div>
                  <div className='column is-4 Card' align="center">
                    <Project11 />
                  </div>
                  <div className='column is-4 Card' align="center">
                    <Project8 />
                  </div>
                  <div className='column is-4 Card' align="center">
                    <Project12 />
                  </div>
                  <div className='column is-4 Card' align="center">
                    <Project9 />
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className='has-text-centered'>
            <Link className="button is-info contact-button" to='/contact'>
              Click Here To Contact Me
            </Link>
          </div>
          <hr className='content-divider' />
          <div className='footer' >
            <Footer />
          </div>
        </Parallax>
        {/* <div style={{ height: '100vh' }}></div> */}
      </div>
    )
  }
}

export default Portfolio;