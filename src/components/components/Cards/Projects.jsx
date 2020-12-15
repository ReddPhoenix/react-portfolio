import React, { Component } from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column has-text-centered">
              <h1 className="title" >Projects</h1><br />
            </div>
          </div>

          <div id='app' className='row columns is-multiline'>

            <div className='column is-4'>
              <Project1 />
            </div>

            <div className='column is-4'>
              <Project3 />
            </div>

            <div className='column is-4'>
              <Project4 />
            </div>

            <div className='column is-4'>
              <Project5 />
            </div>

            <div className='column is-4'>
              <Project6 />
            </div>

            <div className='column is-4'>
              <Project2 />
            </div>



          </div>

        </div>




      </div>

    )
  }
}

export default Projects;