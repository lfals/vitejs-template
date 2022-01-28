import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Dashboard, Home } from '@view'

const Routes = () => {
   return(
       <BrowserRouter>
           <Switch>
           <Route exact path="/">
               <Home />
           </Route>
           <Route path="/dashboard">
               <Dashboard />
           </Route>
           <Route path="/*">
               <Redirect to="/" />
           </Route>
       </Switch>
       </BrowserRouter>
   )
}

export default Routes;