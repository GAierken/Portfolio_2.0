import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react'

export default function About() {
    
    const containerStyles = {
        'font-size': 'large',
        'font-family': "'Montserrat', sans-serif",
        'padding-left': '20px',
        'margin-bottom': '40px',
        'letter-spacing': '-.008em',
        'line-height': '200%',
        'margin-top': '40px'
    }
    return (
        <React.Fragment>
            <Grid style={{'margin-bottom': '50px'}}>
                <Grid.Column width={7}>
                    <Image bordered spaced rounded size='large' src='https://media.vanityfair.com/photos/5ddc1e39d223c300093e7f51/master/w_2560%2Cc_limit/VF1719-Oscars-Cover-a.jpg' />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Container style={containerStyles} fluid>I'm a full stack web developer, proficient with Ruby on Rails, Javascript and React/Redux. Utilizing my technical skills and experience to create innovative web applications excites me. My willingness to learn and adapt prepares me for the fast-paced, ever-changing environment. Collaborative work with fellow developers inspires me to broaden insight. Currently I'm looking for a position, where I can use my abilities to make a substantial impact on webapp improvement. </Container>
                    <Container style={containerStyles} fluid>When I'm not coding, you can find me playdoughing with my twins. </Container>
                    
                </Grid.Column>
            </Grid>
        </React.Fragment>
    )
}
