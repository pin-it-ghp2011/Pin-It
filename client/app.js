import React from 'react'
import Routes from './routes'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    //menu
    primary: {
      main: '#e89194'
    },
    //background
    secondary: {
      main: '#b46166',
      contrastText: '#FF999C'
    },
    text: {
      main: '#FF999C'
    }
  }
})

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  )
}

export default App
