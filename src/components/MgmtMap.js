import React, {Component} from 'react';
import { Container, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Balloon = () => <Icon size='large' name='building outline'/>;


class MgmtMap extends Component {
  state={
        latLongs: []
    }


  componentWillMount(){
    let addresses = this.props.buildings.slice(0, 20).map(building => building.street_address + ' '+ building.neighborhood)

    addresses.forEach((address) => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBQ4_QuLss7Ku7JwfKTfIwxza1knCbBbCE`)
      .then(data => data.json())
      .then(data =>{
        if(data.results.length > 0){
          this.setState({ latLongs: [...this.state.latLongs, data.results[0].geometry.location]})
        }else{
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address[1]}&key=AIzaSyBQ4_QuLss7Ku7JwfKTfIwxza1knCbBbCE`)
          .then(data => data.json())
          .then(data => {
            if (data.results.length >0){
              this.setState({ latLongs: [...this.state.latLongs, data.results[0].geometry.location]})
            }else{
              this.setState({latLongs: [...this.state.latLongs, {lat: 40.730610, lng: -73.935242}]})
            }
          })
        }
      })
  })
}
  render(){
    return(
      this.state.latLongs.length > 0 ? <Container style={{width: '100%', height: '400px'}}>
        <GoogleMapReact
          center={{lat: 40.71, lng: -74.0}}
          defaultZoom={10}>
          {this.state.latLongs.map((place, index) => (
              <Balloon key={index} lat={place.lat} lng={place.lng}/>
          ))}
        </GoogleMapReact>
      </Container> : null

    )
  }
}

export default MgmtMap
