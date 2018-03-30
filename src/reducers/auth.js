import { LOGIN } from '../constants/Auth'

const initialState = {

}

export default function auth(state = initialState, action) {

	switch (action.type) {
		case LOGIN:
			return action.payload
		default:
			return state;
	}

}
