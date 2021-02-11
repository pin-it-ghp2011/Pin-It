import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleArticleThunk} from '../store/singleArticle'
class SingleArticle extends React.Component {
  componentDidMount() {
    console.log(`the beginning of componentdidmount single article`)
    const {articleId} = this.props.match.params
    console.log('articleId', articleId)
    this.props.loadSingleArticle(articleId)
  }
  render() {
    const body = this.props.article ? this.props.article.body : null
    const title = this.props.article ? this.props.article.title : null
    console.log('SINGLE ARTICLE PROPS: ', this.props)
    return (
      <div>
        <h1>{title}</h1>
        <div>
          {this.props.article ? (
            <div dangerouslySetInnerHTML={{__html: body}} />
          ) : null}
        </div>
      </div>
    )
  }
}
// const Article = (props) => {
//   console.log('Article in SingleArticle props', props.content)
//   return props.content && props.content.length ? (
//     <div dangerouslySetInnerHTML={{__html: props.content}} />
//   ) : null
// }
const mapState = state => {
  return {
    article: state.singleArticle
  }
}
const mapDispatch = dispatch => ({
  loadSingleArticle: articleId => dispatch(fetchSingleArticleThunk(articleId))
})
export default connect(mapState, mapDispatch)(SingleArticle)
