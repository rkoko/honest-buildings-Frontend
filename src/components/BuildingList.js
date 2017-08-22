import React from 'react'
import { NavLink } from 'react-router-dom'
import { List, Segment } from 'semantic-ui-react'


function generateNavlink(building) {
  return (
    <Segment>
      <List divided relaxed>
          <NavLink to={`/buildings/${building.id}`}>
            <List.Item><List.Content>
                <List.Header>{building.street_address} - {building.neighborhood}</List.Header>
            </List.Content></List.Item>
          </NavLink>
      </List>
    </Segment>
  )
}

const BuildingList = ({buildings}) => {

  return (
    <div>
      <ul>
        {buildings.map(building => (generateNavlink(building)))}
      </ul>
    </div>
  )
}

export default BuildingList
