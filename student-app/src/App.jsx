import React from 'react'
// eslint-disable-next-line
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// style 
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { ToastContainer } from 'react-toastify';
// components 
import Home from "./pages/Home"
import Topbar from "./components/Marketplace/Topbar";
import ScrollToTop from "./components/ScrollToTop";
import PrivateRoute from "./components/routing/PrivateRoute";
import PublicRoute from "./components/routing/PublicRoute"
//pages 
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Topbar />
        <Switch>
          <PublicRoute  component={Courses} path="/courses" exact />
          <PublicRoute  component={Login} path="/login" exact />
          <PublicRoute  component={CourseDetails} path="/course/:slug" exact />
          <PrivateRoute  component={Dashboard} path="/dashboard" exact />
          <PrivateRoute  component={Settings} path="/settings" exact />
          <PublicRoute  component={Home} path="/" exact />
        </Switch>
      </Router>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}


export default App;
