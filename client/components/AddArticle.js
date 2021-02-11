import React from 'react'
import {connect} from 'react-redux'
import {addArticleThunk} from '../store/articles'

class AddArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      tag: ''
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
    const {url, tag} = this.state
    console.log('in add article handle submit, url, tag:', url, tag)
    this.props.pinArticle(url, tag)
    this.setState({
      url: '',
      tag: ''
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
            <select
              value={this.state.tag}
              name="tag"
              onChange={this.handleChange}
            >
              <option>Category:</option>
              <option value="News">News</option>
              <option value="Professional">Professional</option>
              <option value="Home and Leisure">Home and Leisure</option>
              <option value="Culture">Culture</option>
              <option value="Sports">Sports</option>
              <option defaultValue="Misc">Misc</option>
            </select>
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  pinArticle: (url, tag) => dispatch(addArticleThunk(url, tag))
})

export default connect(null, mapDispatch)(AddArticle)
