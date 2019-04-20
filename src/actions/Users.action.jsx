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

export const deleteUser = (data) => {
	return ({
		type: DELETE_USER,
		payload: data
	})
}

export const getUsers = () => {
	return ({
		type: GET_USERS
	})
}

export const loadUsers = () => {
	return function asyncAction(dispatch) {
		getUsersFromIndexedDb()
			.then(users => {
				dispatch({
					type: LOAD_USERS,
					payload: users
				});
			}).catch(() => {
				userProvider.getUsers()
					.then(response => {
						let items = response.map(user => {
							user["del"] = false;
							user["edit"] = false;
							return user
						})
						storage.table("users").bulkAdd(items)
							.then(() => {
								dispatch({
									type: LOAD_USERS,
									payload: items
								});
							}).catch(error => console.error(error))
					}).catch(error => console.error(error))
			})
	}
}

const getUsersFromIndexedDb = () => {
	return new Promise((resolve, reject) => {
		storage.table("users")
			.toArray()
			.then(resp => {
				if (resp.length) {
					resolve(resp)
				} else {
					throw new Error("Ooops! Algo deu errado");
				}
			})
			.catch(error => reject(error))
	})
}