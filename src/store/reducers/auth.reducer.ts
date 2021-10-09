/* eslint-disable import/no-anonymous-default-export */

// types
import {
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_FAILED,
	CHECK_AUTH_FAILED,
	CHECK_AUTH_REQUEST,
	CHECK_AUTH_SUCCESS,
	SIGN_OUT_REQUEST,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILED,
} from "../actions/auth.action";

// interface
import { ActionPayloadType } from "interfaces/app.interface";
import { AuthState } from "interfaces/auth.interface";

const initializeState: AuthState = {
	loading: false,
	error: "",
	auth: null,
};

export default (state = initializeState, action: ActionPayloadType) => {
	switch (action.type) {
		case AUTH_REQUEST:
			return {
				...state,
				loading: true,
			};

		case AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				auth: action.payload,
			};

		case AUTH_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case CHECK_AUTH_REQUEST:
			return {
				...state,
				loading: true,
			};

		case CHECK_AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				auth: action.payload,
			};

		case CHECK_AUTH_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case SIGN_OUT_SUCCESS:
			return {
				...state,
				loading: false,
				auth: action.payload,
			};

		case SIGN_OUT_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
