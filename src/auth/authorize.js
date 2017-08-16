import React, {Component} from 'react'
import PropTypes from 'prop-types'

//
//
// // in components/Beef.js
// import authorize from './authorize.js'
// const Beef = (props) => { <p>Hello World I am { props.isAdmin }</p>}
// export default authorize(Beef, { isAdmin: true})
// // In some other components
// import Beef from './components/beef'
// // An authorized version of beef
// <Beef />
//
//
//
// authorize(<Map>, {isAdmin: true})
// {/* connect(alkjlakj, aslkgjalkdgj) */}

export default function (ComposedComponent, inheritedProps) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
    componentDidMount () {
      if(!localStorage.getItem('jwt')){
        this.context.router.history.push('/')
      }
    }
    componentWillUpdate () {
      if(!localStorage.getItem('jwt')){
        this.context.router.history.push('/')
      }
    }
    render(){
      return <ComposedComponent  {...inheritedProps} />
    }
  }

  return Authentication
}
