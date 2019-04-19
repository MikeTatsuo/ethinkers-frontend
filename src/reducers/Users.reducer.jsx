import { ADD_USER, LIST_USERS, EDIT_USER, DELETE_USER } from '../actions/ActionTypes'

const initialState = {
    name: "",
    lastname: "",
    cpf: "",
    phone: "",
		email: "",
		edit: false,
		delete: false
}

export const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER:
            return payload;
        case LIST_USERS:
            return
        case EDIT_USER:
            return
        case DELETE_USER:
            return
        default:
            return state;
    }
}