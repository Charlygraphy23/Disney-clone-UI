import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	UserCredential,
} from "firebase/auth";
import { call, put, takeLatest } from "redux-saga/effects";

// types
import {
	AUTH_FAILED,
	AUTH_SUCCESS,
	AUTH_REQUEST,
} from "../actions/auth.action";

function* handleAuth() {
	try {
		const auth = getAuth();
		const provider = new GoogleAuthProvider();
		const { user }: UserCredential = yield call(
			[auth, signInWithPopup],
			auth,
			provider
		);

		yield put({ type: AUTH_SUCCESS, payload: user });
	} catch (err: any) {
		yield put({ type: AUTH_FAILED, payload: err.message });
	}
}

function* watchAuth() {
	yield takeLatest(AUTH_REQUEST, handleAuth);
}

export default watchAuth;
