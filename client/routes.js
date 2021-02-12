import React, {Component} from 'react'
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'
//import PropTypes from 'prop-types'
// import {
//   LogIn,
//   SignUp,
//   UserHome,
//   SingleArticle,
//   AddArticle,
//   AllArticles,
// } from './components'
import NavHeader from './components/NavHeader'
import {
  // LogIn,
  // SignUp,
  Home,
  SingleArticle,
  AddArticle,
  AllArticles
} from './components'
import {me} from './store'
/**
 * COMPONENT
 */
class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }
  render() {
    return (
      <Router>
        <NavHeader />
        {/* <NavLink to="/"> Home </NavLink>
          <NavLink to="/addArticle"> Add Article </NavLink>
          <NavLink to="/articles"> All Articles </NavLink> */}

        <Switch>
          {/* Routes placed here are available to all visitors */}
          {/* <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} /> */}
          {/* Routes placed here are only available after logging in */}
          <Route exact path="/" component={Home} />
          <Route exact path="/addArticle" component={AddArticle} />
          <Route exact path="/articles" component={AllArticles} />
          <Route path="/articles/:articleId" component={SingleArticle} />
          {/* Displays our Login component as a fallback */}
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}
const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}
// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(mapState, mapDispatch)(Routes)
/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
// }
