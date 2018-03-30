import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user'
import mood from './mood'
import auth from './auth'
import calc from './calc'

export default combineReducers({
	routing: routerReducer,
	user,
	mood,
	auth,
	calc
})
