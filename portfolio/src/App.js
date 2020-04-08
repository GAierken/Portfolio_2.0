import React from 'react';
import './App.css';
import {  Header } from 'semantic-ui-react'
import Contacts from './Components/Contacts'




function App() {
  return (
    <React.Fragment>
      <Contacts/>
      <Header textAlign='center' className="home my name">Guligena Aierken</Header>
      <Header textAlign='center' className="home my job title ">Full Stack Developer | Software Engineer</Header>
      
    </React.Fragment>
  );
}

export default App;
