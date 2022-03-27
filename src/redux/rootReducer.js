// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import dashboard from './dashboard'
import datasync from './datasync'
import newsfeed from './newsfeed'

const rootReducer = {
  auth,
  navbar,
  layout,
  dashboard,
  datasync,
  newsfeed
}

export default rootReducer
