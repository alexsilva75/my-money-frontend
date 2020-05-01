import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './common/template/Header';
import SideBar from './common/template/SideBar';
import Content from './common/template/Content';
import Footer from './common/template/Footer'
import Routes from './routes/Routes'
import Messages from './common/msg/Messages'
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'
import BillingCycle from './components/billingCycle/BillingCycle'
import './common/template/dependencies'
function App(props) {

  return (  
    <Router>
      <div class="wrapper">        
          <Header />
          <SideBar />     
          <div className="content-wrapper">
            <Routes />       
          </div>
          <Footer />
          <Messages />      
      </div>
    </Router>   
);

/*
  return (      
      <div class="wrapper">
        <Header />
        <SideBar />
       
        <div className="content-wrapper">
          <Switch>
            <Route path={`${match.path}billingCycles`}> 
              <BillingCycle />
            </Route>
            <Route path={`${match.path}`} >
              <Dashboard />
            </Route>                                 
          </Switch>        
        </div>
        <Footer />
        <Messages />
      </div>    
  );*/
}

export default App;
