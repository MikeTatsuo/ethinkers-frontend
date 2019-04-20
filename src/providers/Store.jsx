import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import { image } from "../reducers/Image.reducer";
//import { images } from "../reducers/ImagesList.reducer";
import { users } from "../reducers/Users.reducer";
//import { category } from "../reducers/Category.reducer";

const allReducers = combineReducers({ users })

const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
	allReducers,
	composeEnhancer(applyMiddleware(thunk)),
);