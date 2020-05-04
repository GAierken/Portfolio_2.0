import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'
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
            <Grid style={{'margin-bottom': '50px'}}>
                
                <Grid.Column width={5}>
                    <Image className="my portfolio headshot" rounded style={{ 'margin-top': '20'}} size='medium' src={Profile} />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Container className="my about content for animation purpose" style={containerStyles} >I'm a full stack web developer, proficient with Ruby on Rails, Javascript and React/Redux and I’m currently  learning Python. Utilizing my technical skills and experience to create innovative web applications excites me. As a devotee of programming, I’m focused and detail-oriented, which allows me to accomplish a task efficiently and precisely. My willingness to learn and adapt, prepares me for the fast-paced, ever-changing environment. To hit the ground running, I’m adept at picking up languages and frameworks. Collaborative work with fellow developers inspires me to broaden insight. I’m a committed team player skilled at empowering teams and helping businesses be creative. </Container>
                    
                </Grid.Column>
                
            </Grid>
        </React.Fragment>
    )
}
