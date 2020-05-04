import React from 'react'
import { useHistory } from 'react-router-dom'
import {Sidebar, Menu, Icon} from 'semantic-ui-react'

export default function MenuSidebar(props) {
    let history = useHistory()
   
    const handleClick = (evt) => {
        props.menuItemClicked()
      
        if(evt.target.dataset.id === '1'){
          history.push('/')
        }else if(evt.target.dataset.id === '2'){
          history.push('/about')
        }else if(evt.target.dataset.id=== '3'){
          history.push('/projects')
        }else{
            history.push('/contacts')
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
        <Menu.Item data-id='1' as='a' onClick={handleClick}>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item data-id='2' as='a' onClick={handleClick}>
          <Icon name='heart'/>
          About Me
        </Menu.Item >
        <Menu.Item data-id='3' as='a' onClick={handleClick}>
          <Icon name='folder'/>
          Projects
        </Menu.Item>
        <Menu.Item data-id='4' as='a' onClick={handleClick}>
          <Icon name='mail'/>
          Contact Me
        </Menu.Item>
      </Sidebar>)
}
