import React, {Component} from 'react';
import { Container, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Balloon = () => <Icon size='large' name='building'/>;


const MgmtMap = () =>{
  return(

      <Container style={{width: '100%', height: '400px'}}>
        <GoogleMapReact
          center={{lat: 40.71, lng: -74.0}}
          defaultZoom={10}>

          <Balloon lat={40.71} lng={-74.0}/>

        </GoogleMapReact>
      </Container>
    
  )
}

export default MgmtMap
