// eslint-disable-next-line
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Home from "./pages/Home"
import CourseCard from "./components/Marketplace/CourseCard"
function App() {
  return (
    <div className="App">
      <div className="row justify-content-md-center" style={{backgroundColor: '#f7f7f7'}}>
        <h3>The Nothing</h3>
        <Home/>
      </div>
    </div>
  );
}

export default App;
