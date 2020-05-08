import React from 'react'
import {Container, Segment, Table, Tab } from 'semantic-ui-react'
import Profile from './profile.jpg'
import './About.css'

export default function About() {
    
    const containerStyles = {
        'font-size': 'large',
        'font-family': "'Montserrat', sans-serif",
        'margin-bottom': '40px',
        'letter-spacing': '-.008em',
        'line-height': '200%',
        'margin-top': '40px',
        'color': 'white'
        
    }
    return (
        <React.Fragment>
           
              <Segment.Group  style={{'background-color': '#00468b'}}>
                <Segment textAlign='center'  basic >
                  <Table color='blue' inverted padded="very" size="large">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Technical Skills</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          Ruby, Sinatra, Ruby on Rails, SQL, PostgreSQL, JavaScript, React, Redux, HTML, CSS, RESTful API, Security and Token management (JWT), bcrypt, Git & Github, Object-oriented programming, functional programming
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Segment>
                <Segment basic textAlign='center' >
                  <Container textAlign="left" className="my about content for animation purpose" style={containerStyles} >Hello world! Welcome to my programming website, I’m Guligena, a full stack web developer. Utilizing my technical skills and experience to create user friendly and innovative web applications is my expertise. My linguist background helps me to learn programming languages and frameworks quickly and apply code in a focused and detail-oriented way, which allows me to accomplish tasks efficiently and precisely. Having lived in Asia, Europe and North America, I’m always willing to learn and adapt, which prepares me for the fast-paced, ever-changing environment. As a committed team player, I encourage open communication and positive reinforcement.</Container>

                    <Container textAlign="left" style={containerStyles}>Outside of business hours, you’ll find me creating fun arts with my twins and cooking different cuisines.
                      </Container>   
                </Segment>
              </Segment.Group>  
               
        </React.Fragment>
    )
}
