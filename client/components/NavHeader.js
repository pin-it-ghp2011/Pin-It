import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import AddBoxIcon from '@material-ui/icons/AddBox'
import SvgIcon from '@material-ui/core/SvgIcon'
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded'
import InfoIcon from '@material-ui/icons/Info'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  logo: {
    maxWidth: 75,
    borderRadius: '5%',
    paddingTop: 10,
    padding: 5,
    opacity: '80%'
  },
  pushIconRight: {
    flexGrow: 1
  },
  button: {
    color: 'white',
    fontSize: '1em'
  }
}))

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

function ScrollTop(props) {
  const {children, window} = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })
  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )
    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'center'})
    }
  }
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
}
export default function NavHeader(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="primary" mx="auto">
        <Toolbar className={classes.bar}>
          <NavLink to="/">
            <IconButton className={classes.button}>
              <HomeIcon />
              Home{' '}
            </IconButton>
          </NavLink>

          <NavLink to="/articles">
            <IconButton className={classes.button}>
              <LibraryBooksRoundedIcon />
              Collection
            </IconButton>
          </NavLink>

          <NavLink to="/addArticle">
            <IconButton className={classes.button}>
              <AddBoxIcon />
              Article
            </IconButton>
          </NavLink>

          <NavLink to="/aboutUs" className={classes.pushIconRight}>
            <IconButton className={classes.button}>
              <InfoIcon />
              About Us
            </IconButton>
          </NavLink>

          <NavLink to="/">
            <img src="pinitLogo2.png" alt="logo" className={classes.logo} />
          </NavLink>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2} />
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  )
}
