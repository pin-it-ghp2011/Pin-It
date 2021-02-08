import React, {useState, useEffect} from 'react'

import {NavBar} from './components'
import Routes from './routes'
import {AuthProvider} from './components/auth/AuthContext'

//temporary
import SignUp from './components/auth/SignUp'
import Login from './components/auth/LogIn'
import SingleArticle from './components/SingleArticle'
import firebase from '../config/firebaseConfig'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Routes />
        {/* <SignUp />
        <Login /> */}
        {/* <SingleArticle /> */}
      </AuthProvider>
    </div>
  )
}

export default App
