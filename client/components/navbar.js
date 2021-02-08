import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../components/auth/AuthContext'

const NavBar = () => {
  //calling the signUp function from UseAuth
  const {logout} = useAuth()
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  let {currentUser} = useAuth()
  if (currentUser === null) {
    currentUser = {}
  }

  console.log('Current User :', currentUser)
  // console.log('isLoggedIn:', isLoggedIn)

  return (
    <div className="navBarContainer">
      <div>
        <h1>Current User : {currentUser.email}</h1>
        <Link to="/">PinIt "(Logo)"</Link>
      </div>
      <div>
        {currentUser.email ? (
          <div>
            <a href="Log Out" onClick={logout}>
              Logout
            </a>
            <Link to="/addArticle"> " Add Article " </Link>
            <Link to="/singleArticle">" Single Article "</Link>
          </div>
        ) : (
          <div>
            <Link to="/login"> Log In </Link>
            <Link to="/signup"> Sign Up </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
