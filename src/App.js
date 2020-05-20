import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home'
import { Container, Icon, Divider, Image } from 'semantic-ui-react';
import { Switch, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar'

function App() {


  // const [darkMode, setDarkMode] = useState(false)
  const [sidebarVisi, setSidebarVisi] = useState(false)

  // const handleOnChange = () => {
  //     setDarkMode(!darkMode)
  //     changeBackground()
  // }

  // const changeBackground = () => {
  //   var element = document.body;
  //     element.classList.toggle("dark-mode")
  // }
 
  const sidebarMenuClicked = () => {
       setSidebarVisi(false)
  }

  
  
  return (
    
    <React.Fragment>
     <Image style={{width: '2000px', height:'700px', 'object-fit': 'cover', position: 'relative'}} src='https://static.vecteezy.com/system/resources/previews/000/227/854/original/female-developer-vector.jpg'/>
      <Icon aria-label='menu bars' color='blue' bordered name='bars' size='big' link style={{top:'10px', left:'10px', position: 'absolute'}} 
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
      
          <Icon aria-label="return to top" className="scroll to top button" name='chevron circle up' size='huge' inverted 
          
          onClick={()=> {
          window.scrollTo(
            {
              top: 0,
              behavior: 'smooth'
            }
          )
        }}
        
        />
       
       
      <Container style={{'bottom': '0', color: 'white', 'font-family': "'Montserrat', sans-serif"}} textAlign='center'>Made with <span role='img' aria-label='heart'>❤️</span> by Guligena Aierken © All rights reserved.</Container>
   
       
     
    </React.Fragment>


  );
}

export default App;
