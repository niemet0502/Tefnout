import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// style
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

// components
import Dashboard from './pages/Dashboard';
import SignIn from "./pages/SignIn"
import Navigation from './components/common/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Dashboard />
    </div>
  );
}

export default App;
