import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import SingleArticle from './components/SingleArticle'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <SingleArticle />
    </div>
  )
}

export default App
