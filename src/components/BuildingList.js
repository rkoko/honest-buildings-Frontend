import React from 'react'
import { NavLink } from 'react-router-dom'
import { List, Segment, Grid } from 'semantic-ui-react'
import Nav from '../components/nav'

function generateNavlink(building) {
  return (
    <Segment>
      <List divided relaxed key={building.id}>
          <NavLink to={`/buildings/${building.id}`}>
            <List.Item><List.Content>
                <List.Header>{building.street_address} - {building.neighborhood}</List.Header>
            </List.Content></List.Item>
          </NavLink>
      </List>
    </Segment>
  )
}

const BuildingList = (props) => {
let buildings = props.history.location.state.buildings
  return (
  <div>
    <Nav handleLogout={props.handleLogout}/>
    <div className='ui container' >
      <Segment><h2>Results:</h2></Segment>
      <Grid>
        <Grid.Column width={16}>
          <ul>
            {buildings.map(building => (generateNavlink(building)))}
          </ul>
        </Grid.Column>
      </Grid>

    </div>
  </div>
  )
}

export default BuildingList
