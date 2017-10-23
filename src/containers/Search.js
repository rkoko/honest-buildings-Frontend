import React, {Component} from 'react'
import { Input } from 'semantic-ui-react'

export default class Search extends Component {
  state={
    searchTerm: ''
  }

  handleChange = (event) =>{
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.props.handleSearchSubmit(event.target.value)
    }
  }


  render() {
    return (

      <Input
        className='searchbar'
        fluid icon='search'
        iconPosition='left'
        size='massive'
        placeholder='Search a neighborhood in NYC'
        type="text"
        value={this.searchTerm}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />

        )
  }
}
