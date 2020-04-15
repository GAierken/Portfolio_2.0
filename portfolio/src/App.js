import React from 'react';
import './App.css';
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import Menu from './Components/Menu'
import { GridColumn } from 'semantic-ui-react';
import { Switch, Route } from "react-router-dom";
import About from './Components/About'
import Projects from './Components/Projects'

function App() {
  
  return (
    
    <React.Fragment>
      <Contacts/>
      <GridColumn width="2">
        <Menu/>
      </GridColumn>
      <Switch>
        <Route path='/about'><About/></Route>
        <Route path='/projects'><Projects/></Route>
        <Route path='/'><Home/></Route>
      </Switch>
    </React.Fragment>


  );
}

export default App;
