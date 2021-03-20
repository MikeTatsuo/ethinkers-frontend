import { ADD_USER, EDIT_USER, DELETE_USER, LOAD_USERS } from "./ActionTypes";
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
					})
					.catch(error => console.error(error))
			})
			.catch(error => console.error(error))
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
					.then(indexedUsers => {
						dispatch({
							type: DELETE_USER,
							payload: indexedUsers
						})
					})
					.catch(error => console.error(error))
			})
			.catch(error => console.error(error))
	}
}

export const loadUsers = () => {
	return function asyncLoad(dispatch) {
		getUsersFromIndexedDb()
			.then(usersFromIndexedDb => {
				if (usersFromIndexedDb.length) {
					dispatch({
						type: LOAD_USERS,
						payload: usersFromIndexedDb
					});
				} else {
					getUsersFromAPI()
						.then(usersAPI => {
							dispatch({
								type: LOAD_USERS,
								payload: usersAPI
							});
						})
				}
			})
			.catch(error => console.error(error))
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
				const resp = []
				users.forEach(user => {
					addUserToIndexedDb(user)
						.then(addedUser => {
							resp.push(addedUser)
							if (resp.length === users.length) {
								resolve(resp)
							}
						})
						.catch(error => console.error(error))
				})
			})
			.catch(error => reject(error))
	})
}

const addUserToIndexedDb = (user) => {
	return new Promise((resolve, reject) => {
		storage.table("users").add(user)
			.then(id => {
				user.id = id
				resolve(user)
			})
			.catch(error => reject(error))
	})
}