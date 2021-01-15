import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Home';
import Portfolio from './Cards/Portfolio.jsx';
import Contact from './Contact/Contact';


class App extends Component {
    render() {
        return (
            <>
            <BrowserRouter >
                <div >
                    <Route exact path ='/react-portfolio/' component = {Home} />
                    <Route path ='/react-portfolio/portfolio' component = {Portfolio} />
                    <Route path ='/react-portfolio/contact' component = {Contact} />
                </div> 
            </BrowserRouter>
            </>
        );
    }
}

export default App;
