import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CarouselComp from './CarouselComp'
import Button from '@material-ui/core/Button'

import {NavLink} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  body: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0 30px'
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <div>
      <center>
        <Grid>
          <Box
            className={classes.body}
            alignItems="flex-start"
            justifyContent="center"
            flexWrap="wrap"
            flexDirection="row"
          >
            <CarouselComp />
            <Typography variant="h5">
              <i>Welcome to</i>
            </Typography>
            <Typography variant="h2" color="primary">
              Pin It!
            </Typography>
            <Typography variant="overline">
              It's the reader for all your on- and offline needs.
            </Typography>
            <br />
            <NavLink to="/articles">
              <Button color="secondary" variant="outlined">
                ENTER
              </Button>
            </NavLink>
          </Box>
        </Grid>
      </center>
    </div>
  )
}

export default Home
