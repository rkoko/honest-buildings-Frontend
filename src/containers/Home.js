import React, {Component} from 'react'
import Search from '../containers/Search'
import Nav from '../components/nav'
import FeaturedBuildings from '../components/FeaturedBuildings'
import BuildingList from '../components/BuildingList'
import { getBuildingAddresses } from '../apiAdapters/apiAdapters'


class Home extends Component{
  state = {
    buildings: [],
    searchResults: [],
  }

  componentDidMount(){
    getBuildingAddresses()
    .then(data => this.setState({buildings: data}))
  }

  onSearchSubmit = (searchTerm) =>{
    this.setState({
      searchResults: this.state.buildings.filter(building => building.street_address.toLowerCase().includes(searchTerm.toLowerCase()))
    })
  }


  render() {
    return(
      <div className='homepage'>
        <Nav handleLogout={this.props.handleLogout}/>
        <div className='ui container'>

          <Search handleSearchSubmit={this.onSearchSubmit}/>
          <br/>
          <br/>
          <br/>
          <BuildingList buildings={this.state.searchResults}/>
          <FeaturedBuildings />
        </div>
      </div>
    )
  }
}

export default Home
