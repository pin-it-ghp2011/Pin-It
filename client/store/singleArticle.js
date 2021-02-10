import axios from 'axios'
//action creator
const GET_SINGLE_ARTICLE = 'GET_SINGLE_ARTICLE'

//get single article(for not just getting article from the add)
export const getSingleArticle = article => ({
  type: GET_SINGLE_ARTICLE,
  article
})

//thunk-

export const fetchSingleArticleThunk = articleId => {
  return async dispatch => {
    try {
      console.log('get single article thunk before axios')
      const {data} = await axios.get(`/api/articles/${articleId}`)
      dispatch(getSingleArticle(data))
    } catch (error) {
      console.log('something is wrong in the getSingleArticle thunk:', error)
    }
  }
}

export default function singleArticleReducer(state = {}, action) {
  console.log('articlesReducer:action.type.article', action.type)
  switch (action.type) {
    case GET_SINGLE_ARTICLE:
      return action.article
    default:
      return state
  }
}
