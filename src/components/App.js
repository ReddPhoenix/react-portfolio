import React, {Component} from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import Portfolio from './Cards/Portfolio.jsx';
import Contact from './Contact/Contact';


class App extends Component {
    render() {
        return (
            <>
            <BrowserRouter >
                <div >
                    <Route exact path ='/' component = {Home} />
                    <Route path ='/portfolio' component = {Portfolio} />
                    <Route path ='/contact' component = {Contact} />
                </div> 
            </BrowserRouter>
            </>
        );
    }
}

export default App;
