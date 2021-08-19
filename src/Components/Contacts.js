import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'
import Resume from '../resume.pdf'


 const Contacts = () => {

    const popupStyle = {
        'font-family': "'Montserrat', sans-serif"
    }

    
    return (
        <div style={{marginTop: '50px', marginBottom: '50px'}}>
            <Popup style={popupStyle} inverted size='mini' content='LinkedIn' trigger={<Icon  style={{color: '#efbbff'}} link size="huge" name='linkedin' onClick={() => {window.open('https://www.linkedin.com/in/guligena-aierken/')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='GitHub' trigger={<Icon style={{color: '#efbbff'}}  link size="huge" name='github square' onClick={() => {window.open('https://github.com/GAierken')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='Medium' trigger={<Icon style={{color: '#efbbff'}}  link size="huge" name='medium' onClick={() => {window.open('https://gaierken.medium.com/')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='Email Me' trigger={ <Icon style={{color: '#efbbff'}}  link size="huge" name='mail' onClick={() => {window.open('mailto:g.aierken@gmail.com')}}/>}/>            
            
        </div>
        
    )
}

export default Contacts