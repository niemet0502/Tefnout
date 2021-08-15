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
import Sidebar from './components/common/Sidebar/Sidebar';
import TopBar from "./components/common/TopBar"
function App() {
  return (
    <div className="App">
     <TopBar />
    </div>
  );
}

export default App;
