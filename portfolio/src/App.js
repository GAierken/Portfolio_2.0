import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import { Checkbox, Container, Icon } from 'semantic-ui-react';
import { Switch, Route } from "react-router-dom";
import About from './Components/About'
import Projects from './Components/Projects'
import Sidebar from './Components/Sidebar'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarVisi, setSidebarVisi] = useState(false)

  const handleOnChange = () => {
      setDarkMode(!darkMode)
      changeBackground()
  }

  const changeBackground = () => {
    var element = document.body;
      element.classList.toggle("dark-mode")
  }
 
  const sidebarMenuClicked = () => {
       setSidebarVisi(false)
  }

  
  return (
    
    <React.Fragment>
       
      <Icon bordered name='bars' size='big' link color='blue' style={{right: '200px'}} 
         onClick={() => {
           setSidebarVisi(!sidebarVisi)
         }
         }
      
      />
      <Sidebar visible={sidebarVisi} menuItemClicked={sidebarMenuClicked}/>
      <Switch>
        <Route path='/about'><About/></Route>
        <Route path='/projects'><Projects/></Route>
        <Route path='/contacts'><Contacts/></Route>
        <Route path='/'><Home/></Route>
      </Switch>
      <Container style={{'bottom': '0', color: 'white', 'font-family': "'Montserrat', sans-serif"}} textAlign='center'>© All rights reserved.</Container>
    </React.Fragment>


  );
}

export default App;
