import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleArticleThunk} from '../store/singleArticle'

class SingleArticle extends React.Component {
  componentDidMount() {
    console.log(`the beginning of componentdidmount single article`)
    // console.log('this.props.match.params', this.props.match.params)
    const {articleId} = this.props.match.params
    console.log('articleId', articleId)
    // const articleId = '2021-02-09T22:52:28.565Z'
    this.props.loadSingleArticle(articleId) //get id from component props
    //below part of original axios call-save until store thunk works
    // const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';
    //let scrapedArticle = await axios.get(`/api/singleArticle/`)
    //let article = scrapedArticle.data
    //console.log(scrapedArticle, `do i exist??`, article)
    //this.setState({article: article})
  }

  render() {
    // (this.props.article)?
    const title = this.props.article ? this.props.article.title : null
    console.log('single article- props:', this.props.article)

    return (
      <div>
        <h1>Hello World</h1>
        <h1>{title && this.props.article.title}</h1>
        <div>
          {/* {this.state.article ? <Article content={this.props.article} /> : null} */}
        </div>
      </div>
    )
  }
}

// const Article = (props) => {
//   //console.log('Article in SingleArticle props', props.content)
//   return props.content.body && props.content.body.length ? (
//     <div dangerouslySetInnerHTML={{__html: props.content.body}} />
//   ) : null
// }

const mapState = state => {
  return {
    article: state.singleArticle
  }
}

const mapDispatch = dispatch => ({
  loadSingleArticle: articleId => dispatch(fetchSingleArticleThunk(articleId)) //linter doesnt like url in here?
})

export default connect(mapState, mapDispatch)(SingleArticle)
