import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Button, Form, Icon, Header } from 'semantic-ui-react'

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
    console.log("props", this.props)
    return (
      <div className='loginform'>

      <Grid className='grid' centered columns={3}>

        <Grid.Column>

          <Form size='large' onSubmit={this.handleSubmit}>
            <Header as='h2' size='medium'>
              <Icon name='building outline' />
              Honest Buildings
            </Header>
            {this.props.errorMsg !== '' ? <p>{this.props.errorMsg}</p>: null}
            <Form.Field required>
              <label>Username</label>
              <input name='username' placeholder='username'
               onChange={this.handleChange} />
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <input type='password' name='password' placeholder='password'
               onChange={this.handleChange}/>
            </Form.Field>
            <Button size='small' type='submit'>Login</Button>
            <NavLink to="/signup"><Button size='small'>New to us? Sign Up</Button></NavLink>
          </Form>
        </Grid.Column>
      </Grid>

    </div>
    )
  }
}

export default LoginForm
