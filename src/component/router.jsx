import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Faq from './Faq';
import Homepage from './Homepage';

class MainRouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Homepage}/>
                        <Route path='/About'  component={About}/>
                        <Route path='/Contact' component={Contact}/>
                        <Route path='/Faq' component={Faq}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default MainRouter;