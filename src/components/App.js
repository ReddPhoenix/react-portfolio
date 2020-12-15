import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// Route components
import Projects from './components/Cards/Projects';



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Projects} />


                </div>
            </BrowserRouter>
        );
    }
}

export default App;