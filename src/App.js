import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch,Redirect,BrowserRouter as Router} from 'react-router-dom'

import Route from './Routes/Route';
function App() {
  return (
    <div className="App">
        <Route/> 
    </div>
  );
}

export default App;
