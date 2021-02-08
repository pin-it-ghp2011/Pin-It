import React from 'react'
//import { Link } from 'react-router-dom'; => to get single article
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
    const {articles} = this.props
    console.log('all articles', this.props)
    return (
      <div>
        <div className="list-view">
          {articles.map(article => {
            return (
              <div key={article.id}>
                {/* <div >
                  <Link to={``}>

                  </Link>
                </div> */}
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
