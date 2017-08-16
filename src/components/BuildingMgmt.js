import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import { NavLink, Route } from 'react-router-dom'


class BuildingMgmt extends Component{
  constructor(props){
    super(props)


    this.state={
      id: window.location.pathname.split("/")[2],
      mgmtName: '',
      avg_rating: '',
      buildings: '',
      reviews: ''
    }
  }

componentWillMount(){
  fetch(`http://localhost:3000/api/v1/building_mgmts/${this.state.id}`)
  .then(data => data.json())
  .then(result => this.setState({
    mgmtName: result.building_mgmt.name,
    avg_rating: result.avg_rating,
    buildings: result.buildings,
    reviews: result.reviews
  }))
}

  render(){
    console.log(this.state)
    return(
      <div className='ui container' >
        <h4>{this.state.mgmtName}</h4>
          <p>{this.state.avg_rating}/5 star rating</p>
          <p>manages {this.state.buildings.length} other buildings </p>
          <p>List their reviews or their buildings?</p>

        {/* <ul>
        Reviews: {this.state.reviews.map(review =>(
          <li key={review.id}>{review.body}</li>)
        )}
        </ul> */}
      </div>
    )
  }

}

export default BuildingMgmt
