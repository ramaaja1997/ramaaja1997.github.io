import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Profile from './profile';
import Contact from './contact';
import Portofolio from './portofolio';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/contact" component={Contact} />
    <Route path="/portofolio" component={Portofolio} />
  </Switch>
)

export default Main;
