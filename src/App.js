import React from 'react';
import './css/App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './components/home'
import Contact from './components/contact'
import Info from './components/info'
import NavBar from './components/navbar'


function App() {
  return (
    <BrowserRouter>
      <div className="dna-app">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/contact' component={ Contact }/>
          <Route path='/info' component={ Info }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
