// import { LOGIN } from '../constants/Auth'
import axios from 'axios'

export function sum(n1, n2) {
	return function(dispatch) {
		axios.post('/api/calc/sum', {
			n1: n1,
			n2: n2
		}).then((response) => {
			console.log(response.data)
			dispatch({
				type: 'SUM',
				payload: response.data.answer
			})
		}).catch((error) => {
			console.log(error)
		})
	}
}


