import { combineReducers } from 'redux' 
import {reducer as toastrReducer} from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'
import PostReducers from './PostReducers'

export default combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  posts : PostReducers
})
