import React from 'react'; 
import HomePage from './components/HomePage'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
        
        </div>
    </Router>
  );
}

export default App;
