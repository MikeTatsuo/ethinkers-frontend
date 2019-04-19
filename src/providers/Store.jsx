import { createStore, combineReducers } from "redux";
//import { image } from "../reducers/Image.reducer";
//import { images } from "../reducers/ImagesList.reducer";
import { user } from "../reducers/Users.reducer";
//import { category } from "../reducers/Category.reducer";

const allReducers = combineReducers({ user })

export const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);