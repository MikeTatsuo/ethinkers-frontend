import { ADD_USER, GET_USERS, EDIT_USER, DELETE_USER, LOAD_USERS } from '../actions/ActionTypes'

const initialState = [{
	id: 0,
	firstname: "",
	lastname: "",
	cpf: "",
	phone: "",
	email: "",
	edit: false,
	del: false
}]

export const users = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_USER:
			return payload;
		case GET_USERS:
			return payload;
		case EDIT_USER:
			return payload;
		case DELETE_USER:
			return payload;
		case LOAD_USERS:
			return payload;
		default:
			return state;
	}
}