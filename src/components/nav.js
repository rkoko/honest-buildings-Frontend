import React, {Component} from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {

  render() {
    return (
      <div className='navbar'>
      <Menu>
        <Menu.Item><NavLink to="/home"><Icon name='building outline' />Honest Buildings - community for NYC renters</NavLink></Menu.Item>
        <Menu.Item name='Logout' onClick={() => this.props.handleLogout()} position="right" >
            <NavLink to="/"> Logout </NavLink>
        </Menu.Item>
      </Menu>
    </div>
    )
  }
}
