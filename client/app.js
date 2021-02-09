import React, {useState, useEffect} from 'react'
import {NavBar} from './components'
import Routes from './routes'
import {AuthProvider} from './components/auth/AuthContext'

//temporary
//import SignUp from './components/SignUp'
//import LogIn from './components/Login'
import AddArticle from './components/AddArticle'
import SingleArticle from './components/SingleArticle'
import firebase from '../config/firebaseConfig'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Routes />
        {/* <SignUp />
        <LogIn /> */}
        <AddArticle />
        <SingleArticle />
      </AuthProvider>
    </div>
  )
}

export default App
