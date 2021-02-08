import React from 'react'
import {connect} from 'react-redux'
import {addArticleThunk} from '../store/articles'

class AddArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const {url} = this.state
    console.log('in add article handle submit, url:', url)
    this.props.pinArticle(url)
    this.setState({
      url: ''
    })
  }

  render() {
    return (
      <div className="add-article-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Paste Article URL here!
            <input
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
              required
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  pinArticle: url => dispatch(addArticleThunk(url)) //linter doesnt like url in here?
})

export default connect(null, mapDispatch)(AddArticle)
