import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import NavHeader from './components/NavHeader'
import {
  Home,
  SingleArticle,
  AddArticle,
  AllArticles,
  AboutUs
} from './components'
import {me} from './store'

class Routes extends Component {
  render() {
    return (
      <Router>
        <NavHeader />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addArticle" component={AddArticle} />
          <Route exact path="/articles" component={AllArticles} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route path="/articles/:articleId" component={SingleArticle} />

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
