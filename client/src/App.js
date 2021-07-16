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
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";


function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route  component={Home} path="/" exact />
        <Route  component={Courses} path="/courses" exact />
        <Route  component={CourseDetails} path="/course-details" exact />
      </Switch>
  </Router>
  );
}

export default App;
