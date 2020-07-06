import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import ProtectedRoute from "./common/ProtectedRoute";
import Modules from "./ProtectedRoute";

function Router(props) {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <ProtectedRoute 
            path='/:module' component={Modules} />
        </Switch>
    </BrowserRouter>
  );
}

export default Router;