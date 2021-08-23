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

// components 
import Home from "./pages/Home"
import Topbar from "./components/Marketplace/Topbar";
import ScrollToTop from "./components/ScrollToTop";

//pages 
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Topbar />
      <Switch>
        <Route  component={Home} path="/" exact />
        <Route  component={Courses} path="/courses" exact />
        <Route  component={Login} path="/login" exact />
        <Route  component={CourseDetails} path="/course-details" exact />
      </Switch>
  </Router>
  );
}

export default App;
