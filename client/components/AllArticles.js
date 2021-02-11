import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchArticlesThunk, removeArticleThunk} from '../store/articles'
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
        {articles.map(article => {
          return (
            <div key={article.id}>
              <h2>
                <Link to={`/articles/${article.id}`}>
                  Title: {article.doc.title}
                </Link>
              </h2>
              <h2>{article.id}</h2>
              <div className="column">
                <button
                  type="button"
                  className="remove"
                  onClick={() => this.props.removeArticle(article)}
                >
                  Remove
                </button>
              </div>
            </div>
          )
        })}
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
