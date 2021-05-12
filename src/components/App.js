import React, {Component} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './HomeNew/TestHome.jsx';
import ScrollToTopButton from '../components/Scroll-To-Top-Button/Scroll-To-Top-Button.jsx';
import '../components/Scroll-To-Top-Button/Scroll-To-Top-Button.css';
import GitHubButton from '../components/GitHub-Button/GitHub-Button.jsx';
import '../components/GitHub-Button/GitHub-Button.css';
import LinkedInButton from '../components/LinkedIn-Button/LinkedIn-Button.jsx';
import '../components/LinkedIn-Button/LinkedIn-Button.css';
// import Home from './Home/Home';
// import Portfolio from './Cards/Portfolio.jsx';
// import Contact from './Contact/Contact';
// import Portfolio from '../../src/components/Cards/Portfolio.jsx';
// import Contact from '../../src/components/Contact/Contact.jsx';
// import HomeNew from './HomeNew/HomeNew.jsx';




class App extends Component {
    render() {
        return (
            <>
                <Router >
                    <ScrollToTop />
                    <div >
                        <Route exact path ='/' component = {Home} />
                        {/* <Route path ='/portfolio' component = {Portfolio} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/homenew' component={HomeNew} />
                        <Route path='/testhome' component={TestHome} /> */}
                   
                    </div>
                    <LinkedInButton />
                    <GitHubButton />
                    <ScrollToTopButton />
                </Router>
            </>
        );
    }
}

export default App;
