import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from "../components/header";
import NoMatchPage from "../components/Nomatch";
import DashboardPage from "../components/Dashboard";
import Contact from "../components/ContactUs";
import AboutUsPage from "../components/Aboutus";
export const history= createBrowserHistory()

const AppRouter= () => (
    <BrowserRouter history={history}>
    <div>
      <Header/>
      <Switch>
        <Route path='/' component={DashboardPage} exact={true} />
        <Route path='/contactus' component={Contact} />
        <Route path='/aboutus' component={AboutUsPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  </BrowserRouter>
  );
export default AppRouter;