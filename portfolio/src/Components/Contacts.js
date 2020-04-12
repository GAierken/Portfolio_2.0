import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import Resume from '../resume.pdf'

 const Contacts = () => {

    
    return (
        <div>
            <Icon link size="big" name='linkedin' onClick={() => {window.open('https://www.linkedin.com/in/guligena-aierken/')}}/>
            <Icon link size="big" name='github square' onClick={() => {window.open('https://github.com/GAierken')}}/>
            <Icon link size="big" name='medium' onClick={() => {window.open('https://medium.com/@g.aierken')}}/>
            <Icon link size="big" name='mail' onClick={() => {window.open('mailto:g.aierken@gmail.com')}}/>
            <Icon link size="big" name='file alternate' onClick={() => {window.open(Resume)}}/>
        </div>
        
    )
}

export default Contacts