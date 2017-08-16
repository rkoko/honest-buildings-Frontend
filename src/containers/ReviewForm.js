import React, { Component } from 'react'
import { Button, Form, Rating } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { postForm } from '../apiAdapters/apiAdapters'


class ReviewForm extends Component {
  state = {
    upkeep_rating: '',
    comms_rating: '',
    quality_rating: '',
    speedy_rating: '',
    body: '',
    comment: 'comment',
    building_mgmt_id: '' ,
    building_id: ''
  }

  handleChange = (event) => {
    this.setState({
      body: event.target.value,
      building_mgmt_id: this.props.mgmt_id,
      building_id: this.props.building_id
    })
  }

  handleComms = (event, { rating }) => {
    this.setState({
      comms_rating: rating.toString()
    })
  }

  handleQuality = (event, { rating }) => {
    this.setState({
      quality_rating: rating.toString()
    })
  }

  handleSpeed = (event, { rating }) => {
    this.setState({
      speedy_rating: rating.toString()
    })
  }

  handleUpkeep = (event, { rating }) => {
    this.setState({
      upkeep_rating: rating.toString()
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    postForm(this.state)
    .then((res) => {
      this.props.history.push(`/buildings/${this.state.building_id}`)
      this.props.newReviewSubmit(res)
    })
  }



  render() {
    console.log(this.props.history)
    return (
      <div className='ui container'>
      <p>Your review helps others learn about the building and how it's being managed. This is a source for potential residents and current residents so please do not write a review if you are connected with the building management firm. </p>
      <Form onSubmit={this.handleSubmit} >
        <Form.Field>
          <label>Building Upkeep</label>
           <Rating name='upkeep' maxRating={5} onRate={this.handleUpkeep}/>
        </Form.Field>
        <Form.Field>
          <label>Communication</label>
           <Rating name='comms' maxRating={5} onRate={this.handleComms}/>

        </Form.Field>
        <Form.Field>
          <label>Quality of Work</label>
           <Rating name='quality' maxRating={5} onRate={this.handleQuality}/>

        </Form.Field>
        <Form.Field>
          <label>Speed of Resolution</label>
           <Rating name='speed' maxRating={5} onRate={this.handleSpeed}/>

        </Form.Field>
        <Form.TextArea label='Your review' name="body" placeholder="Tell us more..." onChange={this.handleChange} />

        <Button>Submit Review</Button>
        <NavLink to={`/buildings/${this.props.match.params.id}`}><Button>Cancel</Button></NavLink>

      </Form>

    </div>
    )
  }
}


export default ReviewForm
