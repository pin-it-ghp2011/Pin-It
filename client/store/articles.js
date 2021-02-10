import axios from 'axios'

//action type
const GET_ARTICLES = 'GET_ARTICLES'
const ADD_ARTICLE = 'ADD_ARTICLE'

//action creators
//get all articles
export const getArticles = articles => ({
  type: GET_ARTICLES,
  articles
})
//add and article by url on webpage
export const addArticle = url => ({
  type: ADD_ARTICLE,
  url
})

//fetch all artciles (add user key later if we get there)
export const fetchArticlesThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/articles')
      console.log('in fetch allArticles thunk, data:', data)
      dispatch(getArticles(data))
    } catch (error) {
      console.log('something is wrong in the fetchArticles thunk:', error)
    }
  }
}

//it works!!
export const addArticleThunk = url => {
  return async dispatch => {
    try {
      //console.log('add article thunk before axios-url', url)
      const articleUrl = {url: url}
      console.log('IN ARTICLES THUNK', articleUrl)
      const {data} = await axios.post(`/api/articles`, articleUrl) // this needs to be fixed= needs matching route/local storage
      console.log('add article thunk, after axios:data', data)
      dispatch(addArticle(data))
    } catch (error) {
      console.log('something is wrong in the addArticles thunk:', error)
    }
  }
}

export default function articlesReducer(state = {}, action) {
  //console.log('articlesReducer:action.type', action.type.article)
  switch (action.type) {
    case GET_ARTICLES:
      return action.articles
    case ADD_ARTICLE:
      return {...state, article: action.article}
    default:
      return state
  }
}
