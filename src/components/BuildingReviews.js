import React from 'react'
import { Item, Segment } from 'semantic-ui-react'

const BuildingReviews = (props) =>{
  return( props.currentReviews.length > 0 ?
      <div>
          <ul>
            {props.currentReviews.map(review=>(<Segment padded><h4>{review.avg_rating}/5 stars </h4> {review.body}</Segment>))}
          </ul>
      </div> : <div> No reviews have been written yet.....</div>
    )
}

export default BuildingReviews
