import React from 'react'
import {  Grid, Card, Rating } from 'semantic-ui-react'

const BuildingReviews = (props) =>{
  return(props.currentReviews.length > 0 ?
    <div className='review-list'>

      <Grid>
        <Grid.Column width={15}>
          <Card.Group itemsPerRow={3}>
            {props.currentReviews.map(review=>(
              <Card centered key={review.id}>
                <Card.Content>
                  <Card.Header>
                  <Rating  defaultRating={review.avg_rating} maxRating={5} disabled/>
                  </Card.Header>
                  <Card.Meta>
                    {review.user.username}
                  </Card.Meta>
                  <Card.Description>
                    {review.body}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='field-ratings'>
                    Upkeep: {review.upkeep_rating}.0 Comms: {review.comms_rating}.0 <br />
                    Quality: {review.quality_rating}.0 Speed: {review.speedy_rating}.0 <br />

                  </div>
              </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </div>
    : <div> No reviews have been written yet.....</div>

  )
}

export default BuildingReviews
