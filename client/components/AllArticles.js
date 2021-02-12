import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchArticlesThunk, removeArticleThunk} from '../store/articles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export class AllArticles extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.loadArticles()
  }
  handleClick() {
    this.setState({
      clicked: true
    })
  }

  render() {
    const articles = this.props.articles || []
    console.log('ALL ARTICLES: ', articles)
    console.log('article1', articles[0])

    return articles ? (
      <div>
        <Grid container spacing={3} style={{padding: 2}}>
          {articles.map(article => {
            return (
              <div key={article.id}>
                <Grid item xs={10} sm={6} lg={4} xl={3}>
                  <Card>
                    <CardMedia
                      style={{height: 0, paddingTop: '56.25%'}}
                      image={article.doc.screenshotName}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {article.doc.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        href={`/articles/${article.id}`}
                      >
                        Read
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => this.props.removeArticle(article)}
                      >
                        Remove
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </div>
            )
          })}
        </Grid>
      </div>
    ) : null
  }
}
const mapState = state => {
  return {
    articles: state.articles
  }
}

const mapDispatch = dispatch => ({
  loadArticles: () => dispatch(fetchArticlesThunk()),
  removeArticle: article => dispatch(removeArticleThunk(article))
})

export default connect(mapState, mapDispatch)(AllArticles)
