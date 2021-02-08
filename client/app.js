import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import SingleArticle from './components/SingleArticle'
import AddArticle from './/components/AddArticle'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AddArticle />
      <SingleArticle />
    </div>
  )
}

export default App
