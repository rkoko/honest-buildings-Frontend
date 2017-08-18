import React from 'react'
import { Item } from 'semantic-ui-react'

const BuildingReviews = (props) =>{
  return( props.currentReviews.length > 0 ?
      <div>
          <ul>
            {props.currentReviews.map(review=>(<li key={review.id}>{review.body}</li>))}
          </ul>
      </div> : <div> No reviews have been written yet.....</div>
    )
}

export default BuildingReviews
