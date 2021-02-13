import React from 'react'
import {connect} from 'react-redux'
import {addArticleThunk} from '../store/articles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {FormControl} from '@material-ui/core'
import {TextField} from '@material-ui/core'

let image1 =
  'https://images.unsplash.com/photo-1541613569553-332a2574a508?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80%27'

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
      tag: 'misc'
    })
  }

  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        // style={{height: '25%'}}
        className="add-article-form"
      >
        {/* <Grid item style={{height: '50%'}}> */}
        <Card
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: 800,
            width: 500
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <CardHeader title="Add The Article" />
            <CardMedia
              style={{height: 0, paddingTop: '56.25%', flex: 1}}
              image={image1}
            />
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                container: true,
                alignContent: 'center'
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                style={{paddingLeft: '0.25%'}}
              >
                Don't worry to loose your article in the pile. Just "Pin It".
                Add the article link below and it will be saved in your
                collection for future read.
              </Typography>

              <TextField
                type="url"
                name="url"
                label="Paste Article URL Here!"
                variant="outlined"
                fullWidth={true}
                value={this.state.url}
                onChange={this.handleChange}
                required
              />

              {/* <select
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
                </select> */}
            </CardContent>
            <CardActions style={{height: 0}}>
              <input type="submit" />
            </CardActions>
          </form>
        </Card>
        {/* </Grid> */}
        {/* <Grid item> */}
        {/* <FormControl> */}
        {/* <label>
          Paste Article URL Here!
          <input
            type="url"
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
        <input type="submit" /> */}
        {/* </FormControl> */}
        {/* </Grid> */}
      </Grid>
      // </form>
    )
  }
}

const mapDispatch = dispatch => ({
  pinArticle: (url, tag) => dispatch(addArticleThunk(url, tag))
})

export default connect(null, mapDispatch)(AddArticle)
