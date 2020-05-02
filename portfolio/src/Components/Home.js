import React from 'react'
import {  Header, Container, Icon } from 'semantic-ui-react'




export default function Home() {
  
 
  
  
  const handleNameMouseOver = (evt) => {
    switch (evt.target.innerHTML) {
      case 'Guligena Aierken':
        evt.target.innerHTML = '古丽格娜艾尔肯'
        break;
      case '古丽格娜艾尔肯':
        evt.target.innerHTML = 'Gülginä Ärkin'
        break;
      case 'Gülginä Ärkin':
        evt.target.innerHTML = 'گۈلگىنە ئەركىن'
        break;
      default:
        evt.target.innerHTML = 'Guligena Aierken'
        break;
    }
  }  

  const handleTitleMouseOver = (evt) => {
    switch (evt.target.innerHTML) {
      case 'Full Stack Web Developer | Software Engineer':
        evt.target.innerHTML = '软件工程师'
        break;
      case '软件工程师':
        evt.target.innerHTML = 'Softwareentwickler'
        break;
      case 'Softwareentwickler':
        evt.target.innerHTML = 'يۇمشاق دېتال ئېنژېنېرى'
        break;
      default:
        evt.target.innerHTML = 'Full Stack Web Developer | Software Engineer'
        break;
    }
  }
  return (
      
        <React.Fragment>
          <Container style={{'margin-bottom': '300px', 'margin-top': '150px'}}className="home">
            <Header  onMouseOver={handleNameMouseOver} textAlign='center' className="home my name">Guligena Aierken</Header>
            <Header  onMouseOver={handleTitleMouseOver} textAlign='center' className="home my job title ">Full Stack Web Developer | Software Engineer</Header>
          </Container> 
          <Icon name='angle double down' size='huge'/>
          
        </React.Fragment>
    )
}
