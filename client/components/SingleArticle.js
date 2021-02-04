import React from 'react'
import axios from 'axios'

class SingleArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: {}
    }
  }
  async componentDidMount() {
    console.log(`the beginning of componentdidmount`)
    // const url = 'https://en.wikipedia.org/wiki/Groundhog_Day';
    let scrapedArticle = await axios.get(`/api/singleArticle/`)
    let article = scrapedArticle.data
    console.log(scrapedArticle, `do i exist??`, article)
    this.setState({article: article})
  }

  render() {
    return (
      <div>
        <div>
          {this.state.article ? <Article content={this.state.article} /> : null}
        </div>
      </div>
    )
  }
}
export default SingleArticle

const Article = props => {
  console.log('props', props.content)
  return props.content.body && props.content.body.length ? (
    <div dangerouslySetInnerHTML={{__html: props.content.body}} />
  ) : null
}
