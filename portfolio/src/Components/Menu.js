import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalSecondary extends Component {

  render() {
   

    return (
      
      <Menu style={{'margin-top': '50px'}}
          items={[
            { key: 'l1', name: 'link-1', content: 'About Me' },
            { key: 'l2', name: 'link-2', content: 'Projects' }
            
          ]}
          pointing
        />
    )
  }
}