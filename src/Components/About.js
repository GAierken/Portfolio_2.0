import React from 'react'
import {Container, Segment} from 'semantic-ui-react'
import './About.css'
import IconImages from './IconImages'


export default function About() {
    
    const containerStyles = {
        'font-size': '20px',
        'font-family': "'Montserrat', sans-serif",
        'margin-bottom': '40px',
        'letter-spacing': '-.008em',
        'line-height': '200%',
        'margin-top': '40px',
        'color': 'white'
        
    }
    return (
        <React.Fragment>
           
              <Segment.Group style={{'background-color': '#00468b'}}>
                <Segment textAlign='center' style={{'background-color': 'papayawhip'}} basic >
                  <IconImages/>
                </Segment>
                <Segment basic textAlign='center' >
                  <Container  textAlign="justified" className="my about content for animation purpose" style={containerStyles} >Hello world! Welcome to my programming website, I’m Guligena, an aspiring full stack web developer. Utilizing my technical skills and experience to create user friendly and innovative web applications is my expertise. I’m proficient with but not limited to JavaScript, React, Ruby on Rails and SQL (PostgreSQL & SQLite). 

                  </Container>
                  <Container textAlign="justified" style={containerStyles}>My linguist background helps me to learn programming languages and frameworks quickly and apply programming in a focused and detail-oriented way, which allows me to construct organized and documented code. 
                        Having lived in Asia, Europe and North America, I’m always willing to learn and adapt, which prepares me for thriving in a global, fast-paced, ever-changing enterprise environment. As a committed team player, I encourage open communication and positive reinforcement which leads to productive and effective outcomes of teamwork. </Container>
                    <Container  textAlign="justified" style={containerStyles}>In addition to coding and programming, you’ll find me creating fun arts with my twins, cooking different cuisines, reading or sudokuing.
                      </Container>   
                </Segment>
              </Segment.Group>  
               
        </React.Fragment>
    )
}
