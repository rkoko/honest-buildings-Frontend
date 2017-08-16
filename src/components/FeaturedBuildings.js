import React from 'react'
import { Card } from 'semantic-ui-react'

const FeaturedBuildings = () => (
  <div>
    <h2><font color="white">Featured Buildings</font></h2>
    <Card.Group>

        <Card
          href='/buildings/12'
          header='50 Prince Street'
          meta='NoLiTa'
          description='A modern mid-rise elevator building offering laundry facilities.'
        />

        <Card
          href='/buildings/1393'
          header='171 Clinton Street'
          meta='Brooklyn Heights'
          description='A low-rise landmark walk-up building.'
        />
        <Card
          href='/buildings/11'
          header='239 Park Avenue South'
          meta='Gramercy Park'
          description='A pre-war mid-rise building offering laundry facilities. The apartments have very high ceilings.'
        />
      </Card.Group>
    </div>
)

export default FeaturedBuildings
