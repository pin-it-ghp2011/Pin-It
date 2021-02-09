import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleArticleThunk} from '../store/singleArticle'

class SingleArticle extends React.Component {
  componentDidMount() {
    console.log(`the beginning of componentdidmount single article`)
    const {articleId} = this.props.match.params
    this.props.loadSingleArticle(articleId) //get id from component props
    //below part of original axios call-save until store thunk works
    // const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';
    //let scrapedArticle = await axios.get(`/api/singleArticle/`)
    //let article = scrapedArticle.data
    //console.log(scrapedArticle, `do i exist??`, article)
    //this.setState({article: article})
  }

  render() {
    console.log('single article- props:', this.props)
    return (
      <div>
        <div>
          {/* {this.state.article ? <Article content={this.props.article} /> : null} */}
        </div>
      </div>
    )
  }
}

const Article = props => {
  //console.log('Article in SingleArticle props', props.content)
  return props.content.body && props.content.body.length ? (
    <div dangerouslySetInnerHTML={{__html: props.content.body}} />
  ) : null
}

const mapState = state => {
  return {
    article: state.SingleArticle
  }
}

const mapDispatch = dispatch => ({
  loadSingleArticle: articleID => dispatch(fetchSingleArticleThunk(articleId)) //linter doesnt like url in here?
})

export default connect(mapState, mapDispatch)(SingleArticle)
