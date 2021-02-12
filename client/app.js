import React from 'react'
import Routes from './routes'
//import {AuthProvider} from './components/auth/AuthContext'

//temporary
//import SignUp from './components/SignUp'
//import LogIn from './components/Login'
// import NavBar from './components/NavBar'
//mport SingleArticle from './components/SingleArticle'
//import firebase from '../config/firebaseConfig'

const App = () => {
  return (
    <div>
      {/* <AuthProvider> */}
      {/* <NavBar /> */}

      <Routes />
      {/* <SignUp />
        <LogIn /> */}
      {/* <AddArticle />
      <AllArticles /> */}
      {/* <SingleArticle /> */}
      {/* </AuthProvider> */}
    </div>
  )
}

export default App
