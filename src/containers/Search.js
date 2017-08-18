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
        size='massive'
        placeholder='Search a street or neighborhood'
        type="text"
        value={this.searchTerm}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />

        )
  }
}
