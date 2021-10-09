/* eslint-disable import/no-anonymous-default-export */

// types
import {
	GET_MOVIES_REQUEST,
	GET_MOVIES_SUCCESS,
	GET_MOVIES_FAILED,
	VIEW_MOVIE_REQUEST,
	VIEW_MOVIE_FAILED,
	VIEW_MOVIE_SUCCESS,
} from "../actions/movies.action";

// interface
import { ActionPayloadType } from "interfaces/app.interface";
import { MoviesState } from "interfaces/movies.interface";

const initializeState: MoviesState = {
	loading: false,
	error: "",
	movies: [],
	movie: null,
};

export default (state = initializeState, action: ActionPayloadType) => {
	switch (action.type) {
		case GET_MOVIES_REQUEST:
			return {
				...state,
				loading: true,
			};

		case GET_MOVIES_SUCCESS:
			return {
				...state,
				loading: false,
				movies: action.payload,
			};

		case GET_MOVIES_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case VIEW_MOVIE_REQUEST:
			return {
				...state,
				loading: true,
			};

		case VIEW_MOVIE_SUCCESS:
			return {
				...state,
				loading: false,
				movie: action.payload,
			};

		case VIEW_MOVIE_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
