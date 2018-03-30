const initialState = [
]

export default function calc(state = initialState, action) {

	switch (action.type) {
		case 'SUM': {
			return [...state, action.payload]
		}
		default:
			return state;
	}

}
