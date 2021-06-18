// eslint-disable-next-line
import Topbar from "./components/Marketplace/Topbar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import CategoryCard from "./components/Marketplace/CategoryCard"

function App() {
  return (
    <div className="App">
      <div className="row">
        <CategoryCard />

      </div>
    </div>
  );
}

export default App;
