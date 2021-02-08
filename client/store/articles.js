import axios from 'axios'
//import localDB from '../localDatabase'<=do in back?

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

//thunks
// export const fetchArticlesThunk = () => {
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.get(`/api/articles`) // this needs to be fixed-0local storage- needs userId
//       dispatch(getArticles(data))
//     } catch (error) {
//       console.log('something is wrong in the fetchArticles thunk:', error)
//     }
//   }
// }

//it works!!
export const addArticleThunk = url => {
  return async dispatch => {
    try {
      //console.log('add article thunk before axios-url', url)
      const articleUrl = {url: url}
      const {data} = await axios.post(`/api/articles`, articleUrl) // this needs to be fixed= needs matching route/local storage
      //console.log('add article thunkafter axios:data', data)
      dispatch(addArticle(data))
    } catch (error) {
      console.log('something is wrong in the addArticles thunk:', error)
    }
  }
}

export default function articlesReducer(state = [], action) {
  console.log('articlesReducer:action.type', action.type.articles)
  switch (action.type) {
    case GET_ARTICLES:
      return action.articles
    case ADD_ARTICLE:
      return [...state, action.article]
    default:
      return state
  }
}
