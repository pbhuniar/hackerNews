import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch,Redirect,BrowserRouter as Router} from 'react-router-dom'

import Routes from './Routes/Routes';


function App() {
  return (
    <div className="App">
        <Routes/> 
    </div>
  );
}

export default App;
