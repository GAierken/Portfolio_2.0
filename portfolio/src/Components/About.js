import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'

export default function About() {
    
    return (
        <React.Fragment>
            <Grid>
                <Grid.Column width={7}>
                    <Image src='https://media.vanityfair.com/photos/5ddc1e39d223c300093e7f51/master/w_2560%2Cc_limit/VF1719-Oscars-Cover-a.jpg' />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Header as='h5'>I'm happy</Header>
                </Grid.Column>
            </Grid>
        </React.Fragment>
    )
}
