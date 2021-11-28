import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import Public from './Routes/Public';

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Streulichtfilterung.3.P1023258.jpg/540px-Streulichtfilterung.3.P1023258.jpg")'}}>
      <Router>
        <Public/>
      </Router>
    </div>
  );
}

export default App;
