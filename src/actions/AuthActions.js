import { LOGIN } from '../constants/Auth'
import axios from 'axios'

export function login(email, password) {
	console.log('AUTH ACION LOGIN')
	console.log(email)
	console.log(password)
	return function(dispatch) {
		axios.post('/api/auth/signin', {
			email: email,
			password: password
		}).then((response) => {

			localStorage.setItem('token', response.data.data.token)
			dispatch({
				type: LOGIN,
				payload: response.data.data.user
			})
		}).catch((error) => {
			console.log(error)
		})
	}
}


