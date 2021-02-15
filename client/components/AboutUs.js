import React, {Component} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import {Link} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  typography: {
    align: 'center'
  }
})

export default function AboutUs() {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
      padding={10}
    >
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardMedia style={{height: 0, paddingTop: '100%'}} image="linh.JPG" />
          <CardContent>
            <Typography variant="h6">Linh</Typography>
            <CardActions>
              <GitHubIcon />
              <a href="https://github.com/Vuthuylinh">github</a>
              <LinkedInIcon />
              <a href="https://www.linkedin.com/in/linh-vu-de/">linkedin</a>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardMedia style={{height: 0, paddingTop: '100%'}} image="ivy.jpeg" />
          <CardContent>
            <Typography variant="h6">Ivy</Typography>
            <CardActions>
              <GitHubIcon />
              <a href="https://github.com/liuivy">github</a>
              <LinkedInIcon />
              <a href="https://www.linkedin.com/in/liu-ivy/">linkedin</a>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>

      {/* xxxxx */}

      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardMedia
            style={{height: 0, paddingTop: '100%'}}
            image="ruchi.png"
          />
          <CardContent>
            <Typography variant="h6">Ruchi</Typography>
            <CardActions>
              <GitHubIcon />
              <a href="https://github.com/ruchibrata">github</a>
              <LinkedInIcon />
              <a href="https://www.linkedin.com/in/ruchibratakundu/">
                linkedin
              </a>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>

      {/* xxxxx */}

      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardMedia
            style={{height: 0, paddingTop: '100%'}}
            image="heather.jpeg"
          />
          <CardContent>
            <Typography variant="h6">Heather</Typography>
            <CardActions>
              <GitHubIcon />
              <a href="https://github.com/heathernoto">github</a>
              <LinkedInIcon />
              <a href="https://www.linkedin.com/in/heather-berardo-noto/">
                linkedin
              </a>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
