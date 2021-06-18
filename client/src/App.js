// eslint-disable-next-line
import Topbar from "./components/Marketplace/Topbar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Instructor from "./components/Marketplace/Instructor"

function App() {
  return (
    <div className="App">
      <div className="row justify-content-md-center">
        <Instructor/>
      </div>
    </div>
  );
}

export default App;
