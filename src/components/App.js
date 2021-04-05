import React, {Component} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
// import Portfolio from './Cards/Portfolio.jsx';
// import Contact from './Contact/Contact';
import Portfolio from '../../src/components/Cards/Portfolio.jsx';
import Contact from '../../src/components/Contact/Contact.jsx';
import ScrollToTop from './ScrollToTop';


class App extends Component {
    render() {
        return (
            <>
                <Router >
                    <ScrollToTop />
                    <div >
                        <Route exact path ='/' component = {Home} />
                        <Route path ='/portfolio' component = {Portfolio} />
                        <Route path ='/contact' component = {Contact} />
                    </div> 
                </Router>
            </>
        );
    }
}

export default App;
