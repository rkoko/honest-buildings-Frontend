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
      searchResults: this.state.buildings.filter(building => building.street_address.toLowerCase().includes(searchTerm.toLowerCase()) || building.neighborhood.toLowerCase().includes(searchTerm.toLowerCase())
    )
    })
  }


  render() {
    let heroClasses = this.state.searchResults.length === 0 ? "hero-image" : "hero-image short";
    return(
      <div className='homepage'>
        <div className={heroClasses}>
          <Nav handleLogout={this.props.handleLogout}/>
          <div className='ui container'>
              <div className='hero-text' >
              <h2>Help us guide you home...</h2>
            </div>
              <Search handleSearchSubmit={this.onSearchSubmit}/>

          </div>
        </div>

          <div>
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
