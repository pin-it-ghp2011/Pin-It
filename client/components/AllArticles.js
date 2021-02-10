import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchArticlesThunk} from '../store/articles'

export class AllArticles extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    const articles = this.props.articles.rows || []
    console.log('all articles', articles)
    console.log('singleArticle1', articles[0])

    return (
      <div>
        <div>
          {articles.map(article => {
            return (
              <div key={article.id}>
                <h2>
                  <Link to={`/allArticles/${article.id}`}>
                    Title: {article.doc.title}
                  </Link>
                </h2>
                <h2>{article.id}</h2>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
const mapState = state => {
  return {
    articles: state.articles
  }
}

const mapDispatch = dispatch => ({
  loadArticles: () => dispatch(fetchArticlesThunk())
})

export default connect(mapState, mapDispatch)(AllArticles)
