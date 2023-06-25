import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route,Routes, redirect} from "react-router-dom"
import Homescreen from './components/Homescreen';
import incidentmgt from './components/incidentmgt';


function App() {
  return (
    <Router>
      <Routes>

        <Route  path="/"  exact Component={Login}/>
        
        <Route path ="/homescreen" Component={Homescreen}/>
        <Route path ="/incidentmgt" Component={incidentmgt}/>
        
      </Routes>

      
      

    </Router>
  );
}

export default App;
