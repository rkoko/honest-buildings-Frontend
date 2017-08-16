import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class MgmtForm extends Component{

  state = {
    name: '',
    email: '',
    password: ''
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state)
    fetch('http://localhost:3000/api/v1/building_mgmts/signup', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)})
    .then(res => res.json())
    .then(res => console.log(res))
    }



  render(){
    console.log(this.state)
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Company Name</label>
            <input name="name" placeholder="company name" type="text" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Email </label>
            <input name="email" placeholder="your email will be your signin" type="text" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input name="password" placeholder="password" type="password" onChange={this.handleChange} />
          </Form.Field>
          <Button>Sign up</Button>
        </Form>
      </div>

    )
  }
}

export default MgmtForm
