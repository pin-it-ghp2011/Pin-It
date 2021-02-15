import axios from 'axios'
//action creator
const GET_SINGLE_ARTICLE = 'GET_SINGLE_ARTICLE'
const UPDATE_ARTICLE = 'UPDATE_ARTICLE'

//get single article (for not just getting article from the add)
export const getSingleArticle = article => ({
  type: GET_SINGLE_ARTICLE,
  article
})

//update readingStatus action creator
export const updateArticle = newArticle => ({
  type: UPDATE_ARTICLE,
  newArticle
})

//thunk-
export const fetchSingleArticleThunk = articleId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/articles/${articleId}`)
      dispatch(getSingleArticle(data))
    } catch (error) {
      console.log('something is wrong in the getSingleArticle thunk:', error)
    }
  }
}

export const updateArticleThunk = articleId => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/articles/${articleId}`)
      dispatch(updateArticle(data))
    } catch (error) {
      console.log('ERROR in UPDATE Article thunk:', error)
    }
  }
}

export default function singleArticleReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_ARTICLE:
      return action.article
    case UPDATE_ARTICLE:
      return action.newArticle
    default:
      return state
  }
}
