import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

export default  function MenuList()  {
    
    let history = useHistory()
    
    ////change route with click
    const handleClick = (evt) => {
     
      if(evt.target.innerHTML === 'Home'){
        history.push('/')
      }else if(evt.target.innerHTML === 'About Me'){
        history.push('/about')
      }else{
        history.push('/projects')
      }
      
    }
    return (
      
      <Menu color="blue" borderless onItemClick={ handleClick } style={{'margin-top': '50px', 'font-family': "'Montserrat', sans-serif"}}
          items={[
            { key: 'l1', name: 'link-1', content: 'Home' },
            { key: 'l2', name: 'link-2', content: 'About Me' },
            { key: 'l3', name: 'link-3', content: 'Projects' }
          ]}
          pointing
        />
    )
  }
