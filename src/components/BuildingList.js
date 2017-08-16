import React from 'react'
import { NavLink } from 'react-router-dom'

const BuildingList = ({buildings}) =>{
  return(
    <div>
      <ul>

        {buildings.map(building=>(
            <li key={building.id}> <NavLink to={`/buildings/${building.id}`} >{building.street_address}</NavLink></li>
          )
          )}
      </ul>
  </div>
  )
}

export default BuildingList
