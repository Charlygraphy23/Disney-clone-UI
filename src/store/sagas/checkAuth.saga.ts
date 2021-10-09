import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { put, takeLatest, call } from "redux-saga/effects";

// types
import {
	CHECK_AUTH_REQUEST,
	CHECK_AUTH_FAILED,
	CHECK_AUTH_SUCCESS,
} from "../actions/auth.action";

const getAuthHandler = async (): Promise<User | null> => {
	return new Promise((resolve, reject) => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				resolve(user);
			} else {
				resolve(null);
			}
		});

		// reject();
	});
};

function* handleAuth() {
	try {
		const user: User = yield call(getAuthHandler);

		yield put({ type: CHECK_AUTH_SUCCESS, payload: user });
	} catch (err: any) {
		yield put({ type: CHECK_AUTH_FAILED, payload: err.message });
	}
}

function* watchAuth() {
	yield takeLatest(CHECK_AUTH_REQUEST, handleAuth);
}

export default watchAuth;
