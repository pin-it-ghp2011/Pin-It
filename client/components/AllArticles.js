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
        <Grid container padding={10}>
          {articles.map(article => {
            return (
              <div key={article.id}>
                <Grid item style={{display: 'flex', padding: 10}}>
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
                      style={{height: 0, paddingTop: '56.25%', flex: 2}}
                      image={article.doc.screenshotName}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {article.doc.title}
                      </Typography>
                      <Typography gutterBottom variant="p">
                        Category : {article.doc.tag}
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
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
