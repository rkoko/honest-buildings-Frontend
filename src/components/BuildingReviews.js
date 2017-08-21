import React from 'react'
import { Item, Segment } from 'semantic-ui-react'

const BuildingReviews = (props) =>{
  return( props.currentReviews.length > 0 ?
      <div>
          <ul>
            {props.currentReviews.map(review=>(
              <Segment padded>
                  <h4>{review.avg_rating}/5 stars</h4>
                  <p>Building Upkeep: {review.upkeep_rating}</p>
                  <p>Communication: {review.comms_rating}</p>
                  <p>Quality: {review.quality_rating}</p>
                  <p>Speedy: {review.speedy_rating}</p>
                  {review.body}
              </Segment>))}
          </ul>
      </div> : <div> No reviews have been written yet.....</div>
    )
}

export default BuildingReviews
