import React, {Component} from 'react'
import { Button, Segment } from 'semantic-ui-react'
import { NavLink, Route } from 'react-router-dom'
import { getMgmtById } from '../apiAdapters/apiAdapters'
import Nav from './nav'


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
  getMgmtById(this.state.id)
  .then(result => this.setState({
    mgmtName: result.building_mgmt.name,
    avg_rating: result.avg_rating,
    buildings: result.buildings,
    reviews: result.reviews
  }))
}

  render(){
    // debugger
    return(this.state.buildings.length > 0 ?
      <div>
        <Nav handleLogout={this.props.handleLogout}/>
        <div className='ui container' >
        <Segment><h2>{this.state.mgmtName}</h2></Segment>
            <p>{this.state.avg_rating}/5 star rating</p>
            <p>Manages {this.state.buildings.length - 1} other buildings: </p>
            <ul>
              {this.state.buildings.map(building => <li><NavLink to={`/buildings/${building.id}`}>{building.street_address}</NavLink></li>)}
            </ul>
        </div>
      </div> : null

    )
  }

}

export default BuildingMgmt
