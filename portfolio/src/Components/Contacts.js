import React from 'react'
import { Icon } from 'semantic-ui-react'

 const Contacts = () => {

    
    return (
        <div>
            <Icon link size="big" name='linkedin' onClick={() => {window.location.assign('https://www.linkedin.com/in/guligena-aierken/')}}/>
            <Icon link size="big" name='github square' onClick={() => {window.location.assign('https://github.com/GAierken')}}/>
            <Icon link size="big" name='medium' onClick={() => {window.location.assign('https://medium.com/@g.aierken')}}/>
            <Icon link size="big" name='mail' onClick={() => {window.location.assign('mailto:g.aierken@gmail.com')}}/>
            <Icon link size="big" name='file alternate' onClick={() => {console.log('download resume')}}/>
        </div>
        
    )
}

export default Contacts