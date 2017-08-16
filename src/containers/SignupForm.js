import React, {Component} from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types'


export default class UserForm extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    username: '',
    password: '',
    email: ''
  }

  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    console.log(this.state)
    fetch('http://localhost:3000/api/v1/users/signup', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)})
    .then(res => res.json())
    .then(res => {
      localStorage.setItem('jwt', res.jwt)
      this.context.router.history.push('/home')
    })
  }

  render(){

    return(
      <div className='signupform'>
        <Grid className='grid' centered columns={3}>
          <Grid.Column>

      <Form onSubmit={this.handleSubmit}>

        <Form.Field>
          <label>username</label>
          <input name="username" placeholder="username"
          type="text"
        onChange={this.handleInputChange} />
        </Form.Field>

        <Form.Field>
          <label>password</label>
          <input name="password" placeholder="password"
          type="password"
        onChange={this.handleInputChange}
      />
        </Form.Field>

        <Form.Field>
          <label>email</label>
          <input name="email" placeholder="email"
          type="text"
          onChange={this.handleInputChange}
        />
        </Form.Field>


        <Button>Sign up</Button>
      </Form>
    </Grid.Column>
  </Grid>
    </div>
    )
  }

}
