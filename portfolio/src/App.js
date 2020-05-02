import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import Menu from './Components/Menu'
import { Checkbox, Container } from 'semantic-ui-react';
import { Switch, Route } from "react-router-dom";
import About from './Components/About'
import Projects from './Components/Projects'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleOnChange = () => {
      setDarkMode(!darkMode)
      changeBackground()
  }

  const changeBackground = () => {
    var element = document.body;
      element.classList.toggle("dark-mode")
  }
 

  
  return (
    
    <React.Fragment>
      <Contacts/>
        <Checkbox style={{position: 'absolute', top: '20px',
          right: '40px'}}toggle onChange={handleOnChange} />
       <Menu/>
      <Switch>
        <Route path='/about'><About/></Route>
        <Route path='/projects'><Projects/></Route>
        <Route path='/'><Home/></Route>
      </Switch>
      <Container style={{'bottom': '0', color: 'navy', 'font-family': "'Montserrat', sans-serif"}} textAlign='center'>© All rights reserved.</Container>
    </React.Fragment>


  );
}

export default App;
