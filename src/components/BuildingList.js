import React from 'react'
import { NavLink } from 'react-router-dom'

function generateNavlink(building) {
  return (
    <li key={building.id}>
      <NavLink to={`/buildings/${building.id}`}>{building.street_address}</NavLink>
    </li>
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
