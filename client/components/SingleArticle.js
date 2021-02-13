import React from 'react'
import {connect} from 'react-redux'
import {
  fetchSingleArticleThunk,
  updateArticleThunk
} from '../store/singleArticle'

class SingleArticle extends React.Component {
  componentDidMount() {
    console.log(`the beginning of componentdidmount single article`)
    const {articleId} = this.props.match.params
    console.log('articleId', articleId)
    this.props.loadSingleArticle(articleId)
  }
  render() {
    const body = this.props.article ? this.props.article.body : null
    // const title = this.props.article ? this.props.article.title : null
    const articleId = this.props.article ? this.props.article._id : null
    const readingStatus = this.props.article
      ? this.props.article.readingStatus
      : null
    console.log('in SINGLE ARTICLE PROPS: ', readingStatus)
    return (
      <div>
        {/* <h1>{title}</h1> */}
        <button
          type="button"
          id="update"
          onClick={() => this.props.updateReadingStatus(articleId)}
        >
          {readingStatus ? <> Done Reading </> : <> Unread </>}
        </button>
        <div>
          {this.props.article ? (
            <div dangerouslySetInnerHTML={{__html: body}} />
          ) : null}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    article: state.singleArticle
  }
}
const mapDispatch = dispatch => ({
  loadSingleArticle: articleId => dispatch(fetchSingleArticleThunk(articleId)),
  updateReadingStatus: articleId => dispatch(updateArticleThunk(articleId))
})
export default connect(mapState, mapDispatch)(SingleArticle)
