import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

//temporary
import SignUp from './components/SignUp'
import Login from './components/Login'
import SingleArticle from './components/SingleArticle'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      {/* <SignUp />
      <Login /> */}
      <SingleArticle />
    </div>
  )
}

export default App
