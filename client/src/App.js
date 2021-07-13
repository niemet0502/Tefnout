// eslint-disable-next-line
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Home from "./pages/Home"
import Button from "./components/Marketplace/Button"


function App() {
  return (
    <div className="App" style={{background: '#f7f7f7'}}>
      <Home/>
    </div>
  );
}

export default App;
