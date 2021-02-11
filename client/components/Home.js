import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CarouselComp from './CarouselComp'

const useStyles = makeStyles({
  body: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
})

const Home = () => {
  const classes = useStyles()

  return (
    <div>
      <center>
        <Grid>
          <Box className={classes.body} sx={{border: '1px dashed grey'}}>
            <Typography variant="h3">Welcome to Pin It!</Typography>
            <Typography variant="h6">
              It's the reader for all your offline needs.
            </Typography>
          </Box>
        </Grid>
      </center>
      <CarouselComp />
    </div>
  )
}

export default Home
