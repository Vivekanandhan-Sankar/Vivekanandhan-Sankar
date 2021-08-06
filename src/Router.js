import { Component } from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
            </BrowserRouter>
        );
    }
}

export default Router;