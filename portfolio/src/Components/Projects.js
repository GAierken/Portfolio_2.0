import React from 'react'
import shop from './shop.png'
import nyc from './nyc.png'
import therappoint from './therappoint.png'
import ScrollTrigger from '@terwanerik/scrolltrigger'

import {  Item, Button } from 'semantic-ui-react'

export default function Projects() {
   

    const trigger = new ScrollTrigger()
          trigger.add('[data-trigger]')

    const projects = [
        {
         name: 'Therappoint',
         description: 'Appointment scheduling app developed especially for early intervention service agencies',
         tools: 'Ruby on Rails, bcrypt, active_model_serializers, PostgreSQL, React, Redux, Thunk, react-datepicker, Google Map Api, Geocode, Sweetalert, Semantic UI, CSS, HTML, .dotenv',
         frontend: 'https://github.com/GAierken/Therappoint_frontend',
         backend: 'https://github.com/GAierken/Therappoint_backend',
         demo: 'https://www.youtube.com/watch?v=QZEsGHZpaoo&feature=youtu.be',
         img: therappoint 
        },
        {
            name: 'NYC Museums Reviews',
            description: 'Yelp-like web-app for museums in NYC where users can find and review museums',
            tools: 'Ruby on Rails, SQL, active_model_serializers, JavaScript, HTML, CSS',
            frontend: 'https://github.com/GAierken/Museums-in-NYC-Frontend',
            backend: 'https://github.com/GAierken/Museums-in-NYC-Backend',
            demo: 'https://www.youtube.com/watch?v=1PeeuhozAIo&feature=youtu.be',
            img: nyc
        },
        {
         name: 'Flatiron Baby Shopping',
         description: 'E-commerce web-app designed for baby-products',
         tools: 'Ruby, Rails, BCrypt, JWT, PostgreSQL, .dotenv, React, CSS, HTML',
         frontend: 'https://github.com/GAierken/Flatiron-Shopping-Frontend',
         backend: 'https://github.com/GAierken/Flatiron-Shopping-Backend',
         demo: 'https://www.youtube.com/watch?v=7cNyoHjJjiw&feature=youtu.be',
         img: shop
        }
    ]
  
    return (
        <React.Fragment>
            <Item.Group divided>
                {
                    projects.map((project) => {
                        return(
                            <Item>
                                <Item.Image data-trigger className='project image for animation' size="large" src={project.img} />
                                <Item.Content style={{'text-align': 'left', 'margin': '10px'}}>
                                     <Item.Header style={{color: 'white', 'margin': '10px'}}>{project.name}</Item.Header>
                                     <Item.Description style={{color: 'white', 'margin': '10px'}}>{project.description}</Item.Description>
                                     <Item.Description style={{color: 'white', 'margin': '10px'}}>Used Tools: {project.tools}</Item.Description>
                                    <Item.Extra>
                                        <Button inverted size='mini'
                                        onClick={() => {
                                            window.open(project.frontend)
                                        }
                                        }
                                        color="blue">Frontend</Button>
                                        <Button inverted size='mini'
                                        onClick={() => {
                                            window.open(project.backend)
                                        }
                                        }
                                        color="blue">Backend</Button>
                                        <Button inverted size='mini'
                                        onClick={() => {
                                            window.open(project.demo)
                                        }
                                        }
                                        color="blue">Demo</Button>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        )
                    }
                    )
                }
            </Item.Group>
                
        </React.Fragment>
    )
}
