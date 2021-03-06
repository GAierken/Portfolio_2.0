import React from 'react'
// import { useHistory } from 'react-router-dom'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'

export default function MenuSidebar(props) {
    // let history = useHistory()

    let aboutMeDiv = document.getElementById('about')
    let projectsDiv = document.getElementById('projects')
    let contactsDiv = document.getElementById('contacts')
   
    const handleClick = (evt) => {
        

        props.menuItemClicked()
      
         if(evt.target.dataset.id === '2'){
           
          window.scrollTo(aboutMeDiv.getBoundingClientRect().x, aboutMeDiv.getBoundingClientRect().y)
        }else if(evt.target.dataset.id=== '3'){
          window.scrollTo(projectsDiv.getBoundingClientRect().x, projectsDiv.getBoundingClientRect().y)
        }else{
          window.scrollTo(contactsDiv.getBoundingClientRect().x, contactsDiv.getBoundingClientRect().y)
        }
        
      }
    return (
        <Sidebar
        as={Menu}
        color='blue'
        animation='scale down'
        icon='labeled'
        inverted
        vertical
        visible={props.visible}
        width='thin'
        direction='right'
      >
        {/* <Menu.Item data-id='1' as='a' onClick={handleClick}>
          <Icon data-id='1' name='home' />
          Home
        </Menu.Item> */}
        <Menu.Item data-id='2' as='a' onClick={handleClick}>
          <Icon data-id='2' name='heart'/>
          About Me
        </Menu.Item >
        <Menu.Item data-id='3' as='a' onClick={handleClick}>
          <Icon data-id='3' name='folder'/>
          Projects
        </Menu.Item>
        <Menu.Item data-id='4' as='a' onClick={handleClick}>
          <Icon data-id='4' name='mail'/>
          Contact Me
        </Menu.Item>
      </Sidebar>)
}
