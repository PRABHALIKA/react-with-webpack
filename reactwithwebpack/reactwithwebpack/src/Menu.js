import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';


class Menu extends React.Component {
    render() {
        return <div>
            <HashRouter>
                <div>
                    <div>
                        <a href="#/home">Home</a>
                        <a href="#/about">About</a>
                        <a href="#/contact">Contact</a>
                        <a href="#/service">Service</a>
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about/:id" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/service" component={Service} />
                </div>
            </HashRouter>

        </div>
    }
}


export default Menu;