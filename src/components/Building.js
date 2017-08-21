import React, {Component} from 'react'
import {Button, Modal, Card, Icon, Rating} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import  ReviewForm  from '../containers/ReviewForm'
import BuildingReviews from './BuildingReviews'
import { getBuildingById } from '../apiAdapters/apiAdapters'
import Nav from './nav'

class Building extends Component{
  constructor(props) {
    super()
    this.state={
      id: window.location.pathname.split("/")[2],
      currentAddress: '',
      currentNeighborhood: '',
      currentMgmtId: '',
      currentMgmt: '',
      currentRating: '',
      currentReviews: [],
      modalOpen: false
    }
  }

  componentWillMount() {
    getBuildingById(this.state.id)
    .then(result => this.setState({
      currentAddress: result.building.street_address,
      currentNeighborhood: result.building.neighborhood,
      currentMgmtId: result.building_mgmt.id,
      currentMgmt: result.building_mgmt.name,
      currentRating: result.rating,
      currentReviews: result.reviews}
    ))
  }

  avgRatingBuilding(){
    return this.state.currentReviews
    .map(rev => rev.avg_rating)
    .reduce((a,b) => (a + b)) / this.state.currentReviews.length
  }

  newReviewSubmit = (review) => {
    this.setState({currentReviews: [review, ...this.state.currentReviews]});
    this.setState({currentRating: this.avgRatingBuilding()})
  }

  render() {
    // debugger
    return (
      <div className='building-page'>
        <div className='building-hero-image' >
        <Nav handleLogout={this.props.handleLogout}/>
          <div className='building-hero-text ui container'>
             <h2>{this.state.currentAddress}</h2>
             <h4>{this.state.currentNeighborhood}</h4>
          </div>
        </div>
        <div className='ui container'>
          <div className='buiding-page-header'>

          </div>


          <div className='mgmt-card'>
          <NavLink to={`/building_mgmts/${this.state.currentMgmtId}`}>
          <Card raised>
            <Card.Content>
               {/* <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' /> */}
               <Card.Header>
                  {this.state.currentMgmt}
                </Card.Header>
                <Card.Meta>
                  add in current rating of mgmt co 
                </Card.Meta>
                <Card.Description>
                  add in # of buildings they manage
                </Card.Description>
            </Card.Content>
          </Card>
        </NavLink>
      </div>
      <div className='rating'>
        {this.state.currentRating > 0 ? <Modal trigger={<Button color='grey' size='small'>{Math.round(this.state.currentRating*100)/100}/5 stars</Button>}>
        <Modal.Header>Rating Details</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p># of 5 stars</p>
            <p># of 4 stars</p>
            <p># of 3 stars</p>
            <p># of 2 stars</p>
            <p># of 1 stars</p>

          </Modal.Description>
        </Modal.Content>
     </Modal> : null}


      </div>


          <Modal trigger = {<Button size='small' onClick={() => {this.setState({modalOpen: true})}}>Write a review <Icon circular name='write' /></Button>} open={this.state.modalOpen}>
          <Modal.Header>Rate {this.state.currentAddress}</Modal.Header>
          <Modal.Content>
            <ReviewForm newReviewSubmit={this.newReviewSubmit} building_id={this.state.id} mgmt_id={this.state.currentMgmtId} history={this.props.history} closeModal={() => {this.setState({modalOpen: false})}}/>
          </Modal.Content>
        </Modal>

          <h4>Building Reviews: </h4>
          <BuildingReviews currentReviews={this.state.currentReviews}/>
        </div>
      </div>
    )
  }
}
export default Building
