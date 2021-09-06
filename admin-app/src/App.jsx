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
import Sidebar from './components/layout/Sidebar/Sidebar';
import TopBar from "./components/layout/TopBar"
import Dashboard from './pages/Dashboard';
import SignIn from "./pages/SignIn"
function App() {
  return (
    <div className="App">
      <TopBar />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
