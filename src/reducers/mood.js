import { SET_MOOD, SET_DATE } from '../constants/Mood'

const initialState = {
	mood: 'Perfect',
	date: 'The best Day'
}

export default function mood(state = initialState, action) {

	switch (action.type) {
		case SET_MOOD:
			return { ...state, mood: action.payload }
		case SET_DATE:
			return { ...state, date: action.payload }
		default:
			return state;
	}

}
