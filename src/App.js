import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from './Routes/Home';
import Intro from './Routes/Intro';
import Business from './Routes/Business';
import Civil from './Routes/Civil';
import Factory from './Routes/Factory';
import Invest   from './Routes/Invest';
import Contact from './Routes/Contact';

const AppRouter = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/intro"} exact={true} component={Intro} />
    <Route path={"/business"} exact={true} component={Business} />
    <Route path={"/civil"} exact={true} component={Civil} />
    <Route path={"/factory"} exact={true} component={Factory} />
    <Route path={"/invest"} exact={true} component={Invest} />
    <Route path={"/contact"} exact={true} component={Contact} />
    <Redirect from={"*"} to={"/"} exact={true} />
  </Switch>
);

const App = () => (
    <BrowserRouter>
      <AppRouter /> 
    </BrowserRouter>
)

export default App;
