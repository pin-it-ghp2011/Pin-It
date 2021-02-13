import React from 'react'
import Routes from './routes'
//import {AuthProvider} from './components/auth/AuthContext'
import {createMuiTheme, ThemeProvider, Button} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    //menu
    primary: {
      main: '#10567E'
    },
    //background
    secondary: {
      main: '#EFE1D1',
      contrastText: '#FF999C'
    },
    text: {
      main: '#FF999C'
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
