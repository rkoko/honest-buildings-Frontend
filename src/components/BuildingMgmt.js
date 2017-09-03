import React, {Component} from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { getMgmtById } from '../apiAdapters/apiAdapters'
import  MgmtMap  from './MgmtMap'
import Nav from './nav'


class BuildingMgmt extends Component{
  constructor(props){
    super(props)


    this.state={
      id: window.location.pathname.split("/")[2],
      mgmtName: '',
      mgmtDetails: '',
      avg_rating: '',
      buildings: [],
      reviews: ''
    }
  }


componentWillMount(){
  getMgmtById(this.state.id)
  .then(result => this.setState({
    mgmtName: result.building_mgmt.name,
    mgmtDetails: result.building_mgmt.details,
    avg_rating: result.avg_rating,
    buildings: result.buildings,
    reviews: result.reviews
  }))
}


  render(){

    return(this.state.buildings.length > 0 ?
      <div>
        <Nav handleLogout={this.props.handleLogout}/>
        <div className='ui container' >
        <Segment><h2>{this.state.mgmtName}</h2></Segment>
        {this.state.avg_rating > 0 ? <p> Cumulative avg: {this.state.avg_rating}/5 star rating</p> : <p> No rating yet - would you like to leave a review for one of their buildings? </p>}
            <p>Manages {this.state.buildings.length} total buildings: </p>
            <Grid>
              <Grid.Column width={9}>
                {this.state.buildings.map(building => <Segment><NavLink to={`/buildings/${building.id}`}>{building.street_address}, {building.neighborhood}</NavLink></Segment>)}
              </Grid.Column>

              <Grid.Column width={6}>
                <div className='mgmtDetails'>
                {this.state.mgmtDetails.split("\n").slice(0, -1).map((line)=>
              <p>{line}</p>)}
              {this.state.buildings.length > 0 ? <MgmtMap buildings={this.state.buildings}/> : null}

              </div>
              </Grid.Column>

            </Grid>
        </div>
      </div> : null

    )
  }

}

export default BuildingMgmt
