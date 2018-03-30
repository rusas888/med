import { SET_MOOD, SET_DATE } from '../constants/Mood'

export function setMood(mood) {

	return {
		type: SET_MOOD,
		payload: mood
	}

}


export function setDate(date) {

	return {
		type: SET_DATE,
		payload: date
	}

}
