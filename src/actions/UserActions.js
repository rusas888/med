import { LOAD_NAME } from '../constants/User'

export function loadName(number) {



	var first_name =  ''
	var last_name =  ''

	if(number == 1){
		first_name = 'Aidos',
		last_name = 'Kuanyshev'
	}

	if(number == 2){
		first_name = 'TEST2',
		last_name = 'test2'
	}
	
	if(number == 3){
		first_name = 'test3',
		last_name = 'test3'
	}

	return {
		type: LOAD_NAME,
		payload: {
			first_name: first_name,
			last_name: last_name,
			number: number
		}
	}

}
