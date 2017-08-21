import React, {Component} from 'react'
import {Button, Modal, Card, Icon, Rating} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import  ReviewForm  from '../containers/ReviewForm'
import BuildingReviews from './BuildingReviews'
import { getBuildingById } from '../apiAdapters/apiAdapters'
import { HorizontalBar } from 'react-chartjs-2'
import BuildingMap from './BuildingMap'
import Nav from './nav'

const data= {
        labels: ["5 stars", "4 stars", "3 stars", "2 stars", "1 star"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'gray',
        borderColor: 'rgb(255, 99, 132)',
        data: [3, 6, 8, 5, 5],
        }]
    }

const chartOptions = {
      maintainAspectRatio: false,
      title:{
        display: true,
        text: "Rating Details",
        fontSize: 25,
        position: "top",
        fontColor: "Gray"
      },
      legend: {
        display: false
      }
  }

class Building extends Component{
  constructor(props) {
    super()
    this.state={
      id: window.location.pathname.split("/")[2],
      currentAddress: '',
      currentNeighborhood: '',
      currentMgmtId: '',
      currentMgmt: '',
      currentMgmtBuildingsCount: '',
      currentRating: '',
      currentReviews: [],
      modalOpen: false
    }
  }

  componentWillMount() {
    getBuildingById(this.state.id)
    .then(result => this.setState({
      currentAddress: result.street_address,
      currentNeighborhood: result.neighborhood,
      currentMgmtId: result.building_mgmt.id,
      currentMgmt: result.building_mgmt.name,
      currentMgmtBuildingsCount: result.building_mgmt.buildings.length - 1,
      currentRating: result.reviews.length >0? result.reviews.map(rev => rev.avg_rating).reduce((a,b) => (a + b)) / result.reviews.length : null,
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
          <Card raised color='grey'>
            <Card.Content>
               <Card.Header>
                  {this.state.currentMgmt}
                </Card.Header>
                <Card.Meta>

                </Card.Meta>
                <Card.Description>
                  Manages {this.state.currentMgmtBuildingsCount} other buildings
                </Card.Description>
            </Card.Content>
          </Card>
        </NavLink>
        <br />
        <br />
        <br />

        <BuildingMap />
      </div>
      <div className='rating'>
        {this.state.currentRating > 0 ? <Modal trigger={<Button size='small'><Rating defaultRating={Math.round(this.state.currentRating*100)/100} maxRating={5} disabled/> {this.state.currentReviews.length}  reviews</Button>}>
        <Modal.Header> Current building rating: {this.state.currentRating}/5</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <HorizontalBar data={data} options={chartOptions}/>
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
