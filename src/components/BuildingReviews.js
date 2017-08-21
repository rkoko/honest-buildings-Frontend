import React from 'react'
import {  Grid, Card, Rating, Button, Icon } from 'semantic-ui-react'

const BuildingReviews = (props) =>{
  return(props.currentReviews.length > 0 ?
    <div className='review-list'>

      <Grid>
        <Grid.Column width={15}>
          <Card.Group itemsPerRow={3}>
            {props.currentReviews.map(review=>(
              <Card centered>
                <Card.Content>
                  <Card.Header>
                  <Rating defaultRating={review.avg_rating} maxRating={5} disabled/>
                  </Card.Header>
                  <Card.Meta>
                    {review.user.username}
                  </Card.Meta>
                  <Card.Description>
                    {review.body}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'><Icon name='thumbs outline up' /></Button>
                    <Button basic color='red'><Icon name='thumbs outline down' /></Button>
                  </div>
              </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
        {/* <Grid.Column width={4}></Grid.Column> */}
      </Grid>
    </div>
    : <div> No reviews have been written yet.....</div>

  )
}

export default BuildingReviews
