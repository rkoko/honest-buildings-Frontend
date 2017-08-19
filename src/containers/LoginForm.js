import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Button, Form } from 'semantic-ui-react'

class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onLogin(this.state)
  }


  render () {
    return (
      <div className='loginform'>
      <Grid className='grid' centered columns={3}>
        <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field required>
              <label>Username</label>
              <input name='username' placeholder='Username'
               onChange={this.handleChange} />
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <input type='password' name='password' placeholder='Password'
               onChange={this.handleChange}/>
            </Form.Field>
            <Button size='small' type='submit'>Login</Button>
            <NavLink to="/signup"><Button size='small'>Sign Up</Button></NavLink>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}

export default LoginForm
