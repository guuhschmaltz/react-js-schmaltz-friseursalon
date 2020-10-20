import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Services from './pages/Services';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;