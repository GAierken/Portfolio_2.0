import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'
import Resume from '../resume.pdf'


 const Contacts = () => {

    const popupStyle = {
        'font-family': "'Montserrat', sans-serif"
    }

    
    return (
        <div>
            <Popup style={popupStyle} inverted size='mini' content='LinkedIn' trigger={<Icon style={{top: '500px'}} color="purple" link size="huge" name='linkedin' onClick={() => {window.open('https://www.linkedin.com/in/guligena-aierken/')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='GitHub' trigger={<Icon color='purple' link size="huge" name='github square' onClick={() => {window.open('https://github.com/GAierken')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='Medium' trigger={<Icon color='purple' link size="huge" name='medium' onClick={() => {window.open('https://medium.com/@g.aierken')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='Email Me' trigger={ <Icon color='purple' link size="huge" name='mail' onClick={() => {window.open('mailto:g.aierken@gmail.com')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='Résumé' trigger={<Icon color='purple' link size="huge" name='file alternate' onClick={() => {window.open(Resume)}}/>}/>
            
            
        </div>
        
    )
}

export default Contacts