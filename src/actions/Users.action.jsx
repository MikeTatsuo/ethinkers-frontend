import { ADD_USER, EDIT_USER, DELETE_USER, LOAD_USERS, GET_USERS } from "./ActionTypes";
import { storage } from "../providers/Storage";
import UserProvider from "../providers/Users.provider"

const userProvider = new UserProvider();

export const addUser = (data) => {
	return function asyncAdd(dispatch) {
		delete data.terms;
		addUserToIndexedDb(data)
			.then(() => {
				getUsersFromIndexedDb()
					.then(users => {
						dispatch({
							type: ADD_USER,
							payload: users
						})
					}).catch(error => console.error(error))
			}).catch(error => console.error(error))
	}
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
					addUserToIndexedDb(user)
						.then(user => {
							resp.push(user)
							if (resp.length === users.length) {
								resolve(resp)
							}
						}).catch(error => console.error(error))
				})
			}).catch(error => reject(error))
	})
}

const addUserToIndexedDb = (user) => {
	return new Promise((resolve, reject) => {
		storage.table("users").add(user)
			.then(id => {
				user["id"] = id
				resolve(user)
			}).catch(error => reject(error))
	})
}