import React, {Component} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
// import Portfolio from './Cards/Portfolio.jsx';
// import Contact from './Contact/Contact';
import Portfolio from '../../src/components/Cards/Portfolio.jsx';
import Contact from '../../src/components/Contact/Contact.jsx';
import ScrollToTop from './ScrollToTop';
import HomeNew from './HomeNew/HomeNew.jsx';
import TestHome from './HomeNew/TestHome.jsx';



class App extends Component {
    render() {
        return (
            <>
                <Router >
                    <ScrollToTop />
                    <div >
                        <Route exact path ='/' component = {Home} />
                        <Route path ='/portfolio' component = {Portfolio} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/homenew' component={HomeNew} />
                        <Route path='/testhome' component={TestHome} />
                    </div> 
                </Router>
            </>
        );
    }
}

export default App;
