import React from 'react';
import './App.css';
import {  Header } from 'semantic-ui-react'
import Contacts from './Components/Contacts'


function App() {
  return (
    <React.Fragment>
      <Header as='h1'>Guligena Aierken</Header>
      <Contacts/>
      
    </React.Fragment>
  );
}

export default App;
