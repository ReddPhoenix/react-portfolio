import React, {Component} from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';
// import Portfolio from './Cards/Portfolio.jsx';
// import Contact from './Contact/Contact';
import Portfolio from '../../src/components/Cards/Portfolio.jsx';
import Contact from '../../src/components/Contact/Contact.jsx';


class App extends Component {
    render() {
        return (
            <>
            <Router >
                <div >
                    <Route exact path ='/react-portfolio/' component = {Home} />
                    <Route path ='/react-portfolio/portfolio' component = {Portfolio} />
                    <Route path ='/react-portfolio/contact' component = {Contact} />
                </div> 
            </Router>
            </>
        );
    }
}

export default App;
