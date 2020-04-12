import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      // <Menu className="my menu list for route" pointing secondary vertical>
      //   <Menu.Item
      //     name='home'
      //     active={activeItem === 'home'}
      //     onClick={this.handleItemClick}
      //   />
      //   <Menu.Item
      //     name='about'
      //     active={activeItem === 'about'}
      //     onClick={this.handleItemClick}
      //   />
      //   <Menu.Item
      //     name='projects'
      //     active={activeItem === 'projects'}
      //     onClick={this.handleItemClick}
      //   />
      // </Menu>
      <Menu style={{'margin-top': '50px', position: 'right'}}
          items={[
            { key: 'l1', name: 'link-1', content: 'About Me' },
            { key: 'l2', name: 'link-2', content: 'Projects' }
            
          ]}
          pointing
        />
    )
  }
}