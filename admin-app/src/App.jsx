import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PublicRoute from './components/routing/PublicRoute';
import PrivateRoute from './components/routing/PrivateRoute';
import { history } from './utils/history';
// style
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

// components
import Dashboard from './pages/Dashboard';
import SignIn from "./pages/SignIn"
import ResetPassword from "./pages/ResetPassword"
import Navigation from './components/common/Navigation';
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navigation />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
          <PublicRoute path="/reset-password" component={ResetPassword} exact/>
          <PublicRoute path="/" component={SignIn}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
