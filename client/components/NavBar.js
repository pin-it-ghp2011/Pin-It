import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {useAuth} from './auth/AuthContext'

const NavBar = () => {
  //calling the logout function from UseAuth
  //const {logout} = useAuth()

  // let {currentUser} = useAuth()
  // if (currentUser === null) {
  //   console.log('Current User :', currentUser)
  //   currentUser = {}
  // }

  return (
    <div className="navBarContainer">
      <nav>
        {/* <h1>Current User : {currentUser.email}</h1>
        <Link to="/">PinIt "(Logo)"</Link>
      </div>
      <div>
        {currentUser.email ? (
          <div>
            <a href="Log Out" onClick={logout}>
              Logout
            </a> */}
        <NavLink to="/addArticle"> Add Article </NavLink>
        <NavLink to="/articles"> All Article </NavLink>
        {/* </div>
        ) : (
          <div>
            <Link to="/login"> Log In </Link>
            <Link to="/signup"> Sign Up </Link>
          </div>
        )} */}
      </nav>
    </div>
  )
}

export default NavBar
