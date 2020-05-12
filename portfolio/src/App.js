import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home'
import { Container, Icon, Divider, GridRow, Image } from 'semantic-ui-react';
import { Switch, Route } from "react-router-dom";
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
     <Image style={{width: '1280px', height:'550px', 'object-fit': 'cover', position: 'relative'}} src='https://static.vecteezy.com/system/resources/previews/000/227/854/original/female-developer-vector.jpg'/>
      <Icon bordered name='bars' size='big' link color='blue' style={{top:0, position: 'absolute'}} 
         onClick={() => {
           setSidebarVisi(!sidebarVisi)
         }
         }
      
      />
      <Sidebar visible={sidebarVisi} menuItemClicked={sidebarMenuClicked}/>
      <Switch>
        {/* <Route path='/about'><About/></Route>
        <Route path='/projects'><Projects/></Route>
        <Route path='/contacts'><Contacts/></Route> */}
        <Route path='/'><Home/></Route>
      </Switch>
     

    
      <Divider/>
        <GridRow><Icon className="scroll to top button" name='chevron circle up' size='big' inverted 
          
          onClick={()=> {
          window.scrollTo(
            {
              top: 0,
              behavior: 'smooth'
            }
          )
        }}/></GridRow>
       
      <Container style={{'bottom': '0', color: 'white', 'font-family': "'Montserrat', sans-serif"}} textAlign='center'>Made with ❤️ by Guligena Aierken © All rights reserved.</Container>
   
       
     
    </React.Fragment>


  );
}

export default App;
