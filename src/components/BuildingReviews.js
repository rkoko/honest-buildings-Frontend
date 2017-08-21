import React from 'react'
import {  Segment } from 'semantic-ui-react'

const BuildingReviews = (props) =>{
  return( props.currentReviews.length > 0 ?
      <div>
          <ul>
            {props.currentReviews.map(review=>(
              <Segment padded>
                  <h4>{review.avg_rating}/5 stars</h4>
                  Building Upkeep: {review.upkeep_rating} Communication: {review.comms_rating}<br />
                  Quality: {review.quality_rating} Speedy: {review.speedy_rating}
                    <p>{review.body}</p>
              </Segment>))}
          </ul>
      </div> : <div> No reviews have been written yet.....</div>
    )
}

export default BuildingReviews
