import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import { Checkbox, Container, Icon, Divider, GridRow, Image } from 'semantic-ui-react';
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

  console.log(window.pageYOffset)
  
  
  return (
    
    <React.Fragment>
     <Image style={{width: '1280px', height:'550px', 'object-fit': 'cover', position: 'relative'}}src='https://static.vecteezy.com/system/resources/previews/000/227/854/original/female-developer-vector.jpg'/>
      <Icon bordered name='bars' size='big' link color='blue' style={{top:0, position: 'absolute'}} 
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
     

    
      <Divider/>
        <GridRow ><Icon name='chevron circle up' size='big' inverted/></GridRow>
        <GridRow ><Icon name='chevron circle down' size='big' inverted/></GridRow>
      <Container style={{'bottom': '0', color: 'white', 'font-family': "'Montserrat', sans-serif"}} textAlign='center'>© All rights reserved.</Container>
   
       
     
    </React.Fragment>


  );
}

export default App;
