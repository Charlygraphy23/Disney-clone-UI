import { combineReducers } from "redux";
import AuthReducer from "./auth.reducer";
import MovieReducer from "./movies.reducer";

export default combineReducers({
	AuthReducer,
	MovieReducer,
});
