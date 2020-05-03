import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import Menu from './Components/Menu'
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
 

  
  return (
    
    <React.Fragment>
      {/* <Contacts/> */}
        {/* <Checkbox style={{position: 'absolute', top: '20px',
          right: '40px'}} toggle onChange={handleOnChange} /> */}
       {/* <Menu/> */}
       
      <Icon name='bars' size='big' link color='blue' style={{right: '200px'}} 
         onClick={() => {
           setSidebarVisi(!sidebarVisi)
         }
         }
      
      />
      <Sidebar visible={sidebarVisi}/>
      <Switch>
        <Route path='/about'><About/></Route>
        <Route path='/projects'><Projects/></Route>
        <Route path='/contacts'><Contacts/></Route>
        <Route path='/'><Home/></Route>
      </Switch>
      <Container style={{position: 'fixed', 'bottom': '0', color: 'navy', 'font-family': "'Montserrat', sans-serif"}} textAlign='center'>© All rights reserved.</Container>
    </React.Fragment>


  );
}

export default App;
