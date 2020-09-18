import React from 'react'
import shop from './shop.png'
import nyc from './nyc.png'
import help from './help.png'
import record from './record.png'
import therappoint from './therappoint.png'
import {  Item, Button } from 'semantic-ui-react'

export default function Projects() {
   

    
    const projects = [
        {
            name: 'Record Me!',
            description: 'A mobile app to ask other nearby to record police interaction',
            tools: 'Ruby on Rails, PostgreSQL, JavaScript, React Native, expo.io',
            frontend: 'https://github.com/DGFF-Harmonyhack/Frontend-React-Native',
            backend: 'https://github.com/DGFF-Harmonyhack/backend-ruby-rails',
            demo: 'https://www.youtube.com/watch?time_continue=52&v=mZlK-NMBzeE&feature=emb_title',
            img: record
        },
        {
            name: 'Help@Home',
            description: 'A platform to connect volunteers and people who are in need',
            tools: 'Ruby on Rails, BCrypt, JWT, PostgreSQL, .dotenv, Heroku, JavaScript',
            frontend: 'https://github.com/emilyychenn/girlsintechhackathon',
            backend: 'https://github.com/GAierken/girlsintech_hackathon_backend',
            demo: 'https://www.youtube.com/watch?v=2WOvksIWGQk&feature=emb_title',
            img: help
        },
        {
         name: 'Therappoint',
         description: 'Appointment scheduling app developed especially for early intervention service agencies',
         tools: 'Ruby on Rails, bcrypt, active_model_serializers, PostgreSQL, React, Redux, Thunk, React-router, react-datepicker, Google Map Api, Geocode, Sweetalert, Semantic UI, CSS, HTML, .dotenv',
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
         tools: 'Ruby on Rails, BCrypt, JWT, PostgreSQL, .dotenv, React, react-router, CSS, HTML',
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

                                {/* <Item.Image style={{display: 'block'}}src='https://joinswoop.com/assets/img/macbook-b0327c6d0c.svg' size='large'/> */}
                                <Item.Image  className='project image for animation' size='large' src={project.img} />
                              
                                <Item.Content style={{'text-align': 'left', 'margin': '10px'}}>
                                     <Item.Header style={{color: 'white', 'margin': '10px'}}>{project.name}</Item.Header>
                                     <Item.Description style={{color: 'white', 'margin': '10px'}}>{project.description}</Item.Description>
                                     <Item.Description style={{color: 'white', 'margin': '10px'}}>Tools: {project.tools}</Item.Description>
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
