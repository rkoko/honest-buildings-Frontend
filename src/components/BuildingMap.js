import React, {Component} from 'react';
import { Container, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Balloon = () => <Icon size='large' name='marker'/>;

class BuildingMap extends Component{


  render(){
    return(
      <div className='map'>
        <Container style={{width: '100%', height: '400px'}}>
         <GoogleMapReact
           center={{lat: 40.7233245, lng: -73.9959128}}
           defaultZoom={15}>

           <Balloon lat={40.7233245} lng={-73.9959128}/>

         </GoogleMapReact>
       </Container>
      </div>
    )
  }
}


export default BuildingMap
