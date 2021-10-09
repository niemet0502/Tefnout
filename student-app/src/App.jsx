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
import { connect } from "react-redux"
//pages 
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Topbar />
        <Switch>
          <Route  component={Courses} path="/courses" exact />
          <Route  component={Login} path="/login" exact />
          <Route  component={CourseDetails} path="/course-details" exact />
          <Route  component={Home} path="/" exact />
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
