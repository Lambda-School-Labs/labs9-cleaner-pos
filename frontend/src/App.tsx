import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import {
  LandingPage,
  Houses,
  Login,
  PostRegister,
  Settings,
  HouseDetails,
} from './pages/index';
import { Sidebar } from './components/index';
import './App.css';
import Billing from './pages/Billing/Billing';

const App = (props: any) => {
  return (
    <div className='App'>
      <Sidebar />
      <Switch>
        <Route exact path='/test' component={Billing} />
        <Route exact path='/' component={LandingPage} />
        <Route path='/Login' component={Login} />
        <Route exact path='/postreg' component={PostRegister} />
        <Route exact path='/dashboard' component={Houses} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/updateinfo' component={PostRegister} />
        <Route exact path='/houses' component={HouseDetails} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
