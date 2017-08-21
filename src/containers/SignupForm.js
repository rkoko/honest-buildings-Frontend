import React, {Component} from 'react'
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import AuthAdapter from '../auth/authAdapter'



export default class UserForm extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    username: '',
    password: '',
    email: '',
    errorMsgs:[]
  }

  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }


  handleSubmit = () => {
    AuthAdapter.signUp(this.state)
    .then(
      res =>{
        if (res.errors){
          this.setState({errorMsgs: res.errors})
        }else{
          localStorage.setItem('jwt', res.jwt)
          this.context.router.history.push('/home')
        }
    })

  }

  render(){
    return(
      <div className='signupform'>
        <Grid className='grid' centered columns={3}>
          <Grid.Column>

      <Form size='large' onSubmit={this.handleSubmit}>
        <Header as='h2' size='medium'>
          <Icon name='building outline' />
          Honest Buildings
        </Header>
        <Form.Field required>
          <label>Username</label>
          <input name="username" placeholder="username"
          type="text"
        onChange={this.handleInputChange} />
        </Form.Field>

        <Form.Field required >
          <label>Password</label>
          <input name="password" placeholder="password"
          type="password"
        onChange={this.handleInputChange}
      />
        </Form.Field>

        <Form.Field required>
          <label>Email</label>
          <input name="email" placeholder="email"
          type="text"
          onChange={this.handleInputChange}
        />
        </Form.Field>


        <Button>Sign up</Button>
        {this.state.errorMsgs.map((error)=> <div className="error-msgs">{error}</div>)}
      </Form>
    </Grid.Column>
  </Grid>
    </div>
    )
  }

}
