import React from 'react';
import './App.css';
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import Menu from './Components/Menu'
import { GridColumn } from 'semantic-ui-react';




function App() {
  return (
    <React.Fragment>
      <Contacts/>
      <GridColumn width="2">
        <Menu/>
        <Home/> 
      </GridColumn>
      
    </React.Fragment>


  );
}

export default App;
