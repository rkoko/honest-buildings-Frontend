import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'

const FeaturedBuildings = () => (
  <div className='featured-buildings'>
    <h2>Featured Rental Buildings</h2>
    <Grid>
      <Grid.Column width={2}></Grid.Column>
      <Grid.Column width={12}>
    <Card.Group itemsPerRow={3}>
        <Card
          image='https://cdn.vox-cdn.com/uploads/chorus_image/image/48658005/1.0.jpg'
          href='/buildings/12'
          header='50 Prince Street'
          meta='NoLiTa'
          description='A luxury rental in the heart of downtown.'
        />
        <Card
          image='http://s2.r29static.com//bin/entry/5e9/x,80/1412000/image.jpg'
          href='/buildings/1390'
          header='171 Clinton Street'
          meta='Brooklyn Heights'
          description='A highrise with bright, magnificent views of the city. '
        />
        <Card
          image='https://dwtd9qkskt5ds.cloudfront.net/blog/wp-content/uploads/2015/12/Insane-Apartment-Amenities-That-Celebs-Love-1-4-HERO.jpg'
          href='/buildings/11'
          header='239 Park Avenue South'
          meta='Gramercy Park'
          description='Features very high ceilings and private terraces on the top floor.'
        />

      </Card.Group>
      </Grid.Column>
      <Grid.Column width={2}></Grid.Column>
      </Grid>
    </div>
)

export default FeaturedBuildings
