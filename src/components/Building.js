import React, {Component} from 'react'
import {Button, Header, Modal, Segment} from 'semantic-ui-react'
import { NavLink, Route } from 'react-router-dom'
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
    return (
      <div>
        <Nav handleLogout={this.props.handleLogout}/>
        <div className='ui container'>
          <div className='buiding-page-header'>
          <Segment>  <h2>{this.state.currentAddress}</h2></Segment>
              <p>{this.state.currentNeighborhood}, city, state, zip</p>
          </div>
          <div className='rating'>
            <p>{Math.round(this.state.currentRating*100)/100}/5 stars
               <Modal trigger={<Button size='mini'>More</Button>}>
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
            </Modal>
            </p>
          </div>

          <p>mgmt: <NavLink to={`/building_mgmts/${this.state.currentMgmtId}`}>{this.state.currentMgmt}</NavLink></p>

          <Modal trigger = {<Button size='small' onClick={() => {this.setState({modalOpen: true})}}>Write a review</Button>} open={this.state.modalOpen}>
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
