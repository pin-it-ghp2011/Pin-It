import React from 'react'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'

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
  let pictures = [
    {
      image1:
        'https://images.unsplash.com/photo-1541613569553-332a2574a508?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80%27'
    },
    {
      image1:
        'https://images.unsplash.com/photo-1586488902367-b1ef9e974582?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
    },
    {
      image1:
        'https://images.unsplash.com/photo-1598068644062-d487028bea47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
    },
    {
      image1:
        'https://images.unsplash.com/photo-1611159063981-b8c8c4301869?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'
    },
    {
      image1:
        'https://images.unsplash.com/photo-1484229449629-0b35883aaeed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
    }
  ]

  return (
    <div>
      <center>
        <Container className={classes.body}>
          <header>Welcome to Pin It!</header>
          <p>It's the reader for all your offline needs.</p>
        </Container>
        <Carousel autoplay={true}>
          {pictures.map((picture, i) => <Picture key={i} picture={picture} />)}
        </Carousel>
      </center>
    </div>
  )
}

function Picture(props) {
  return (
    <Paper>
      <img src={props.picture.image1} />
      <p>{props.picture.description}</p>
    </Paper>
  )
}

export default Home
