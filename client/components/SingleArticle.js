import React from 'react'
import {connect} from 'react-redux'
import {
  fetchSingleArticleThunk,
  updateArticleThunk
} from '../store/singleArticle'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class SingleArticle extends React.Component {
  componentDidMount() {
    const {articleId} = this.props.match.params

    this.props.loadSingleArticle(articleId)
  }
  render() {
    const body = this.props.article ? this.props.article.body : null
    const articleId = this.props.article ? this.props.article._id : null
    const url = this.props.article.url ? this.props.article.url : null
    const readingStatus = this.props.article
      ? this.props.article.readingStatus
      : null

    return (
      <Grid
        container
        spacing={0}
        direction="column"
        style={{display: 'flex', alignContent: 'center'}}
      >
        <Box style={{display: 'flex'}}>
          <Button
            style={{margin: '0 auto'}}
            size="medium"
            type="button"
            id="update"
            color="primary"
            variant="outlined"
            onClick={() => this.props.updateReadingStatus(articleId)}
          >
            {readingStatus ? <> Done Reading </> : <> Unread </>}
          </Button>
        </Box>
        <Box justifyContent="center" style={{display: 'flex'}}>
          <Typography variant="overline">
            <b>Article URL:</b> {url}
          </Typography>
        </Box>
        <Card
          variant="outlined"
          style={{maxWidth: '75%', padding: 50, justifyContent: 'center'}}
        >
          <div>
            {this.props.article ? (
              <div dangerouslySetInnerHTML={{__html: body}} />
            ) : null}
          </div>
        </Card>
      </Grid>
    )
  }
}

const mapState = state => {
  return {
    article: state.singleArticle
  }
}
const mapDispatch = dispatch => ({
  loadSingleArticle: articleId => dispatch(fetchSingleArticleThunk(articleId)),
  updateReadingStatus: articleId => dispatch(updateArticleThunk(articleId))
})
export default connect(mapState, mapDispatch)(SingleArticle)
