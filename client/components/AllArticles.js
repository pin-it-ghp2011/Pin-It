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

//hardcode for design purpose
let image1 =
  'https://images.unsplash.com/photo-1598068644062-d487028bea47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'

let summary = 'Here will be a small summary of the article'

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
        <Grid container spacing={0} style={{padding: 2}}>
          {articles.map(article => {
            return (
              <div key={article.id}>
                <Grid item xs={10} sm={6} lg={4} xl={3}>
                  <Card>
                    <CardMedia
                      style={{height: 0, paddingTop: '56.25%'}}
                      image={image1}
                      title={article.doc.title}
                    />
                    {/* <h2>
                     <Link to={`/articles/${article.id}`}>
                         Title: {article.doc.title}
                       </Link>
                     </h2>
                    <h2>{article.id}</h2> */}
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {article.doc.title}
                      </Typography>
                      <Typography gutterBottom variant="body1">
                        {summary}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        href={`/articles/${article.id}`}
                      >
                        Read The Article
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => this.props.removeArticle(article)}
                      >
                        Remove The Article
                      </Button>
                    </CardActions>
                    {/* <div className="column"> */}
                    {/* <button
                      type="button"
                      className="remove"
                      onClick={() => this.props.removeArticle(article)}
                    >
                      Remove
                    </button> */}
                    {/* </div> */}
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
