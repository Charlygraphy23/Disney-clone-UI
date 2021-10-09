import { getAuth, signOut } from "firebase/auth";
import { put, takeLatest, call } from "redux-saga/effects";

// types
import {
	SIGN_OUT_REQUEST,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILED,
} from "../actions/auth.action";

function* handleAuth() {
	try {
		const auth = getAuth();
		yield call(signOut, auth);

		yield put({ type: SIGN_OUT_SUCCESS, payload: null });
	} catch (err: any) {
		yield put({ type: SIGN_OUT_FAILED, payload: err.message });
	}
}

function* watchAuth() {
	yield takeLatest(SIGN_OUT_REQUEST, handleAuth);
}

export default watchAuth;
