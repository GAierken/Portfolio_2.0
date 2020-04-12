import React from 'react'
import {  Header, Container } from 'semantic-ui-react'
import IconImages from './IconImages'

export default function Home() {
    return (
        <React.Fragment>
          <Container className="home" textAlign="right">
            <IconImages/>
            <Header textAlign='center' className="home my name">Guligena Aierken</Header>
            <Header textAlign='center' className="home my job title ">Full Stack Developer | Software Engineer</Header>
          </Container> 
        </React.Fragment>
    )
}
