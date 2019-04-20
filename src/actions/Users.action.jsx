import { ADD_USER, EDIT_USER, DELETE_USER, LOAD_USERS, GET_USERS } from "./ActionTypes";
import { storage } from "../providers/Storage";
import UserProvider from "../providers/Users.provider"

const userProvider = new UserProvider();

export const addUser = (data) => {
	return ({
		type: ADD_USER,
		payload: data
	})
}

export const editUser = (data) => {
	return ({
		type: EDIT_USER,
		payload: data
	})
}

export const deleteUser = (id) => {
	return function asyncDel(dispatch) {
		storage.table("users").delete(id)
			.then(() => {
				getUsersFromIndexedDb()
					.then(users => {
						dispatch({
							type: DELETE_USER,
							payload: users
						})
					}).catch(error => console.error(error))
			}).catch(error => console.error(error))
	}
}

export const getUsers = () => {
	return ({
		type: GET_USERS
	})
}

export const loadUsers = () => {
	return function asyncLoad(dispatch) {
		getUsersFromIndexedDb()
			.then(users => {
				if (users.length) {
					dispatch({
						type: LOAD_USERS,
						payload: users
					});
				} else {
					getUsersFromAPI()
						.then(users => {
							dispatch({
								type: LOAD_USERS,
								payload: users
							});
						})
				}
			}).catch(error => console.error(error))
	}
}

const getUsersFromIndexedDb = () => {
	return new Promise((resolve, reject) => {
		storage.table("users")
			.toArray()
			.then(resp => {
				resolve(resp)
			})
			.catch(error => reject(error))
	})
}

const getUsersFromAPI = () => {
	return new Promise((resolve, reject) => {
		userProvider.getUsers()
			.then(users => {
				let resp = []
				users.forEach(user => {
					storage.table("users").add(user)
						.then(id => {
							user["id"] = id
							resp.push(user)
							if (resp.length === users.length) {
								resolve(resp)
							}
						}).catch(error => reject(error))
				})
			}).catch(error => reject(error))
	})
}