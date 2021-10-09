import { call, takeLatest, put } from "redux-saga/effects";
import {
	VIEW_MOVIE_REQUEST,
	VIEW_MOVIE_FAILED,
	VIEW_MOVIE_SUCCESS,
} from "../actions/movies.action";
import { fireStore } from "firebase";
import { ActionPayloadType } from "interfaces/app.interface";

const { doc, getDoc, getFirestore } = fireStore;
const db = getFirestore();

const querySnapshot = async (action: ActionPayloadType) => {
	console.log("ACTION ", action);

	return await getDoc(doc(db, "movies", action.payload)).catch((err) => {
		throw err;
	});
};

function* getMovies(action: ActionPayloadType) {
	try {
		const data: fireStore.DocumentSnapshot<fireStore.DocumentData> = yield call(
			querySnapshot,
			action
		);

		if (data.exists())
			yield put({ type: VIEW_MOVIE_SUCCESS, payload: data.data() });
		else {
			yield put({ type: VIEW_MOVIE_FAILED, payload: "no Data Found" });
		}
	} catch (err: any) {
		yield put({ type: VIEW_MOVIE_FAILED, payload: err.message });
	}
}

function* watchMovies() {
	yield takeLatest(VIEW_MOVIE_REQUEST, getMovies);
}

export default watchMovies;
