import axios from 'axios'

//action type
const GET_ARTICLES = 'GET_ARTICLES'
const ADD_ARTICLE = 'ADD_ARTICLE'
const DELETE_ARTICLE = 'DELETE_ARTICLE'
//action creators
export const getArticles = articles => ({
  type: GET_ARTICLES,
  articles
})

//add an article by url on webpage
export const addArticle = (url, tag) => ({
  type: ADD_ARTICLE,
  url,
  tag
})

//delete article by articleId

export const deleteArticle = article => ({
  type: DELETE_ARTICLE,
  article
})

export const fetchArticlesThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/articles')
      console.log('in fetch allArticles thunk, data:', data.rows)
      dispatch(getArticles(data.rows))
    } catch (error) {
      console.log('something is wrong in the fetchArticles thunk:', error)
    }
  }
}

export const addArticleThunk = (url, tag) => {
  return async dispatch => {
    try {
      const urlAndTag = {url: url, tag: tag}
      console.log('IN ARTICLES THUNK:articles& tag', urlAndTag)
      const {data} = await axios.post(`/api/articles`, urlAndTag)
      console.log('add article thunk, after axios:data', urlAndTag)
      dispatch(addArticle(data))
    } catch (error) {
      console.log('something is wrong in the addArticles thunk:', error)
    }
  }
}

export const removeArticleThunk = article => {
  return async dispatch => {
    try {
      await axios.delete(`/api/articles/${article.id}`)
      dispatch(deleteArticle(article))
    } catch (error) {
      console.log('ERROR in DELETE Article thunk:', error)
    }
  }
}

export default function articlesReducer(state = [], action) {
  switch (action.type) {
    case GET_ARTICLES:
      return action.articles
    case ADD_ARTICLE:
      return [action.article, ...state]
    case DELETE_ARTICLE:
      return state.filter(article => article.id !== action.article.id)
    default:
      return state
  }
}
