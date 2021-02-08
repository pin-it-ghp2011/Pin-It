import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './user'
import articlesReducer from './articles'
import singleArticleReducer from './singleArticle'

const reducer = combineReducers({
  user: userReducer,
  articles: articlesReducer,
  singleArticle: singleArticleReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './articles'
export * from './singleArticle'
