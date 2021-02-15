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
  },
  typography: {
    h5: {
      color: '#006699'
    },
    h6: {
      color: '#006699'
    },
    overline: {
      color: '#006699'
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
