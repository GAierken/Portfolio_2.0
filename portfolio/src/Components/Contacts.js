import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'
import Resume from '../resume.pdf'


 const Contacts = () => {

    const popupStyle = {
        'font-family': "'Montserrat', sans-serif"
    }
    return (
        <div>
            <Popup style={popupStyle} inverted size='mini' content='LinkedIn' trigger={<Icon color="blue" link size="big" name='linkedin' onClick={() => {window.open('https://www.linkedin.com/in/guligena-aierken/')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='GitHub' trigger={<Icon color='blue' link size="big" name='github square' onClick={() => {window.open('https://github.com/GAierken')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='Medium' trigger={<Icon color='blue' link size="big" name='medium' onClick={() => {window.open('https://medium.com/@g.aierken')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='Email Me' trigger={ <Icon color='blue' link size="big" name='mail' onClick={() => {window.open('mailto:g.aierken@gmail.com')}}/>}/>
            <Popup style={popupStyle} inverted size='mini' content='Résumé' trigger={<Icon color='blue' link size="big" name='file alternate' onClick={() => {window.open(Resume)}}/>}/>
            
            
        </div>
        
    )
}

export default Contacts