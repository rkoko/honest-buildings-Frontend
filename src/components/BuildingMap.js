import React, {Component} from 'react';
import { Container, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Balloon = () => <Icon size='large' name='building'/>;

class BuildingMap extends Component{

  constructor(props){
    super()
    this.state={
      lat: 0,
      lng: 0
    }
  }

  componentWillMount() {
    let address = this.props.address
    let hood = this.props.neighborhood
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}${hood}&key=AIzaSyBQ4_QuLss7Ku7JwfKTfIwxza1knCbBbCE`)
    .then(data => data.json())
    .then(data => this.setState({
      lat: data.results[0].geometry.location.lat,
      lng: data.results[0].geometry.location.lng
      }))
  }

  render(){
    return(
      <div className='map'>
        <Container style={{width: '100%', height: '400px'}}>
          <GoogleMapReact
            center={{lat: this.state.lat, lng: this.state.lng}}
            defaultZoom={15}>

            <Balloon lat={this.state.lat} lng={this.state.lng}/>

          </GoogleMapReact>
        </Container>
      </div>
    )
  }
}


export default BuildingMap
