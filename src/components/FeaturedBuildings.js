import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'

const FeaturedBuildings = () => (
  <div className='featured-buildings'>
    <h2>Featured Rental Buildings</h2>
    <Grid>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={10}>
    <Card.Group itemsPerRow={3}>
        <Card
          image='../src/images/living_room.jpg'
          src='../images/fitz.jpg'
          href='/buildings/12'
          header='50 Prince Street'
          meta='NoLiTa'
          description='A modern mid-rise elevator building offering laundry facilities.'
        />
        <Card
          href='/buildings/1390'
          header='171 Clinton Street'
          meta='Brooklyn Heights'
          description='A low-rise landmark walk-up building.'
        />
        <Card
          href='/buildings/11'
          header='239 Park Avenue South'
          meta='Gramercy Park'
          description='A pre-war mid-rise building offering laundry facilities. The apartments have very high ceilings.'
        />

      </Card.Group>
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
      </Grid>
    </div>
)

export default FeaturedBuildings
