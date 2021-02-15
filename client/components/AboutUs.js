import React, {Component} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})

export default function AboutUs() {
  const classes = useStyles()
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Card className={classes.root}>
        <CardMedia image="linh.JPG" />
        <CardContent>
          <Typography variant="h5">Linh</Typography>

          <a href="https://github.com/Vuthuylinh" target="_blank">
            github
          </a>
          <a href="https://www.linkedin.com/in/linh-vu-de/" target="_blank">
            linkedin
          </a>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardMedia image="ivy.jpeg" />
        <CardContent>
          <Typography variant="h5">Ivy</Typography>

          <a href="https://github.com/liuivy" target="_blank">
            github
          </a>
          <a href="https://www.linkedin.com/in/liu-ivy/" target="_blank">
            linkedin
          </a>
        </CardContent>
      </Card>

      {/* xxxxx */}

      <Card className={classes.root}>
        <CardMedia image="ivy.jpeg" />
        <CardContent>
          <Typography variant="h5">Ruchi</Typography>

          <a href="https://github.com/ruchibrata" target="_blank">
            github
          </a>
          <a
            href="https://www.linkedin.com/in/ruchibratakundu/"
            target="_blank"
          >
            linkedin
          </a>
        </CardContent>
      </Card>

      {/* xxxxx */}

      <Card className={classes.root}>
        <CardMedia image="heather.jpeg" />
        <CardContent>
          <Typography variant="h5">Heather</Typography>

          <a href="https://github.com/heathernoto" target="_blank">
            github
          </a>
          <a
            href="https://www.linkedin.com/in/heather-berardo-noto/"
            target="_blank"
          >
            linkedin
          </a>
        </CardContent>
      </Card>
    </Grid>
  )
}
