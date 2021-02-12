import React from 'react'
import Routes from './routes'
//import {AuthProvider} from './components/auth/AuthContext'
import {createMuiTheme, ThemeProvider, Button} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF999C'
    },
    secondary: {
      main: '#E02932'
    }
  }
})

//temporary
//import SignUp from './components/SignUp'
//import LogIn from './components/Login'
// import NavBar from './components/NavBar'
//mport SingleArticle from './components/SingleArticle'
//import firebase from '../config/firebaseConfig'

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <AuthProvider> */}
        {/* <NavBar /> */}

        <Routes />
        {/* <SignUp />
        <LogIn /> */}
        {/* <AddArticle />
      <AllArticles /> */}
        {/* <SingleArticle /> */}
        {/* </AuthProvider> */}
      </ThemeProvider>
    </div>
  )
}

export default App
