import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
//import {HashRouter as Router, Switch, Route,Redirect} from 'react-router-dom'

import BillingCycle from '../components/billingCycle/BillingCycle'
import Dashboard from '../components/dashboard/Dashboard'

export default props => (
    
        <Switch>  
            <Route exact path='/' component={Dashboard} />   
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />        
        </Switch>
    
)