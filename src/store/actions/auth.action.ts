export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILED = "AUTH_FAILED";
export const CHECK_AUTH_REQUEST = "CHECK_AUTH_REQUEST";
export const CHECK_AUTH_SUCCESS = "CHECK_AUTH_SUCCESS";
export const CHECK_AUTH_FAILED = "CHECK_AUTH_FAILED";
export const SIGN_OUT_REQUEST = "SIGN_OUT_REQUEST";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILED = "SIGN_OUT_FAILED";

export const authRequest = () => {
	return {
		type: AUTH_REQUEST,
	};
};

export const checkAuth = () => {
	return {
		type: CHECK_AUTH_REQUEST,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT_REQUEST,
	};
};
