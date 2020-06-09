import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home';
import User from './views/User';


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/"> 
          <Home/>
        </Route>
        <Route path="/users/:userId">
          <User/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
