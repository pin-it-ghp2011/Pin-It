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

    console.log(scrapedArticle, `do i exist??`)
    this.setState({article: scrapedArticle})
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
  return <div dangerouslySetInnerHTML={props.article} />
}
