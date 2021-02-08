import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

//temporary
//import SignUp from './components/SignUp'
//import LogIn from './components/Login'
import AddArticle from './components/AddArticle'
import SingleArticle from './components/SingleArticle'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      {/* <SignUp />
      <LogIn /> */}
      <AddArticle />
      <SingleArticle />
    </div>
  )
}

export default App
