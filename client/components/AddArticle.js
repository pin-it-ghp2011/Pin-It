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
import Box from '@material-ui/core/Box'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar
} from '@material-ui/core'
import {Alert} from '@material-ui/lab'
let image1 =
  'https://images.unsplash.com/photo-1541613569553-332a2574a508?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80%27'
class AddArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      tag: '',
      open: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
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
    //   if (token !== null)
    //  {
    // this.setState({open: true})
    //  }
    this.setState({
      url: '',
      tag: '',
      open: true
    })
  }
  handleClose() {
    this.setState({open: false})
  }
  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        // fullwidth="true"
        className="add-article-form"
        style={{display: 'flex', alignContent: 'center'}}
      >
        <Card
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignContent: 'flex-start',
            height: 500,
            width: 500
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <CardMedia
              style={{
                maxHeight: 225,
                minHeight: 150,
                paddingTop: '10%',
                flex: 1
              }}
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
                variant="overline"
                style={{paddingLeft: '0.25%'}}
              >
                Don't worry about losing your article in the pile. Just "Pin
                It". Add the article link below and it will be saved in your
                collection for future reading.
              </Typography>
              <TextField
                type="url"
                name="url"
                placeholder="Paste Article URL Here!"
                variant="outlined"
                fullWidth={true}
                size="small"
                value={this.state.url}
                onChange={this.handleChange}
                required
              />
              <FormControl variant="outlined" size="small">
                {/* <InputLabel>Choose the Category</InputLabel> */}
                <Select
                  displayEmpty
                  placeholder="Category"
                  value={this.state.tag}
                  name="tag"
                  onChange={this.handleChange}
                >
                  <MenuItem value="">
                    <em>Category</em>
                  </MenuItem>
                  <MenuItem value="News">News</MenuItem>
                  <MenuItem value="Professional">Professional</MenuItem>
                  <MenuItem value="Home and Leisure">Home and Leisure</MenuItem>
                  <MenuItem value="Culture">Culture</MenuItem>
                  <MenuItem value="Sports">Sports</MenuItem>
                  <MenuItem value="Misc">Misc</MenuItem>
                </Select>
              </FormControl>
              <Button color="secondary" type="submit">
                Pin It
              </Button>
              <Snackbar
                autoHideDuration={2000}
                open={this.state.open}
                onClose={this.handleClose}
              >
                <Alert onClose={this.handleClose} severity="success">
                  Your Article has been Pinned
                </Alert>
              </Snackbar>
              {/* {this.state.showAlert ? (
                <div>
                  <Alert>
                    <AlertTitle>Success</AlertTitle>
                    onConfirm={() => this.hideAlert()}
                  </Alert>
                </div>
              ) : null}  */}
            </CardContent>
          </form>
        </Card>
      </Grid>
    )
  }
}
const mapDispatch = dispatch => ({
  pinArticle: (url, tag) => dispatch(addArticleThunk(url, tag))
})
export default connect(null, mapDispatch)(AddArticle)
