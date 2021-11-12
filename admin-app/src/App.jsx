import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PublicRoute from './components/routing/PublicRoute';
import PrivateRoute from './components/routing/PrivateRoute';
import { history } from './utils/history';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// style
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Dashboard from './pages/Dashboard';
import SignIn from "./pages/SignIn"
import ResetPassword from "./pages/ResetPassword"
import Navigation from './components/common/Navigation';
import Categories from './pages/categories/Categories';
import NewCourse from "./pages/courses/NewCourse";
import Reviews from "./pages/reviews/Reviews";
import Users from "./pages/users/Users";
import Settings from './pages/settings/Settings';
import Courses from "./pages/courses/Courses"
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navigation />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
          <PublicRoute path="/reset-password" component={ResetPassword} exact/>
          <PrivateRoute path="/categories" component={Categories} exact />
          <PrivateRoute path="/users" component={Users} exact />
          <PrivateRoute path="/reviews" component={Reviews} exact />
          <PrivateRoute path="/new-course" component={NewCourse} exact />
          <PrivateRoute path="/courses" component={Courses} exact />
          <PrivateRoute path="/settings" component={Settings} exact />
          <PublicRoute path="/" component={SignIn}/>
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
