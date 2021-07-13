// eslint-disable-next-line
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Home from "./pages/Home"
import Button from "./components/Marketplace/Button"


function App() {
  return (
    <div className="App" style={{background: '#f7f7f7'}}>
      <Button 
        text="Views courses" 
        bgColor="#e5175c"
        bgColorHover="#0073ff" />

      <Button 
        text="Views courses"  />

      <Button 
        text="ALL CATEGORIES" 
        bgColor="#0073ff"
        bgColorHover="#0073ff" />

      <Button 
        text="DATA SCIENCE" 
        bgColor="#ffff"
        bgColorHover="#0073ff"/>
    </div>
  );
}

export default App;
