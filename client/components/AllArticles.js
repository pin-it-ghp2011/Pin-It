import React from 'react'
import {connect} from 'react-redux'
import {fetchArticlesThunk, removeArticleThunk} from '../store/articles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {NavLink} from 'react-router-dom'

export class AllArticles extends React.Component {
  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    const articles = this.props.articles || []
    return articles ? (
      <div>
        <Grid container padding={10}>
          {articles.map(article => {
            return (
              <div key={article.id}>
                <Grid
                  item
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'center'
                  }}
                >
                  <Card
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                      height: 500,
                      width: 500
                    }}
                  >
                    <CardMedia
                      style={{height: 0, paddingTop: '25%', flex: 2}}
                      image={article.doc.screenshotName}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="subtitle1">
                        {article.doc.title}
                      </Typography>
                      <Typography variant="subtitle2">
                        Category: {article.doc.tag}
                      </Typography>
                      <Typography variant="subtitle2">
                        Status: {article.doc.readingStatus ? 'Read' : 'Unread'}
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <NavLink to={`/articles/${article.id}`}>
                        <Button size="small" color="secondary">
                          Details
                        </Button>
                      </NavLink>
                      <Button
                        size="small"
                        color="secondary"
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
