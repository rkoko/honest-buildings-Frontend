import React, { Component } from 'react'
import { Button, Form, Rating } from 'semantic-ui-react'
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
    building_id: '',
    errorMsgs: ''
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
      if (res.errors){
          this.setState({errorMsgs: res.errors})
      }else{
        this.props.history.push(`/buildings/${this.state.building_id}`)
        this.props.newReviewSubmit(res)
        this.props.closeModal()
      }
    })
  }



  render() {
    return (
      <div>
      <p>Your review helps others learn about the building and how it's being managed. This is a source for potential residents and current residents so please do not write a review if you are connected with the building management firm. </p>
      <Form onSubmit={this.handleSubmit} className='reviewform' >
        <Form.Field required >
          <label>Building Upkeep</label>
           <Rating name='upkeep' maxRating={5} onRate={this.handleUpkeep}/>
        </Form.Field>
        <Form.Field required >
          <label>Communication</label>
           <Rating name='comms' maxRating={5} onRate={this.handleComms}/>

        </Form.Field>
        <Form.Field required>
          <label>Quality of Work</label>
           <Rating name='quality' maxRating={5} onRate={this.handleQuality}/>

        </Form.Field>
        <Form.Field required>
          <label>Speed of Resolution</label>
           <Rating name='speed' maxRating={5} onRate={this.handleSpeed}/>

        </Form.Field>
        <Form.TextArea required label='Your review' name="body" placeholder="Tell us more..." onChange={this.handleChange} />

        <Button >Submit Review</Button>
        <Button onClick={this.props.closeModal}>Cancel</Button>
      </Form>
    </div>
    )
  }
}


export default ReviewForm
