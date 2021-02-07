import React from 'react'

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
    const url = this.state.url

    console.log('in add article component-url:', url)
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
              value={this.state.name}
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

export default AddArticle
