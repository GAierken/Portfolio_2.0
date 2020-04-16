import React from 'react'
import {  Header, Container, Grid, GridColumn, Image } from 'semantic-ui-react'
import IconImages from './IconImages'
import About from './About'
import Projects from './Projects'
import therappoint from './therappoint.png'

export default function Home() {
    return (
      ///
        <React.Fragment>
          <Container className="home">
            <Header textAlign='center' className="home my name">Guligena Aierken</Header>
            <Header textAlign='center' className="home my job title ">Full Stack Developer | Software Engineer</Header>
          </Container> 
          {/* <Grid columns={2}>
            <Grid.Row>
              <GridColumn>
                <Image src='https://media.vanityfair.com/photos/5ddc1e39d223c300093e7f51/master/w_2560%2Cc_limit/VF1719-Oscars-Cover-a.jpg'/>
              </GridColumn>
              <GridColumn>
                <Image src={therappoint}/>
              </GridColumn>
            </Grid.Row>
            <Grid.Row></Grid.Row>
          </Grid> */}
        </React.Fragment>
    )
}
