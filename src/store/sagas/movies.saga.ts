import { call, takeLatest, put } from "redux-saga/effects";
import {
	GET_MOVIES_FAILED,
	GET_MOVIES_SUCCESS,
	GET_MOVIES_REQUEST,
} from "../actions/movies.action";
import { fireStore } from "firebase";

const { collection, getDocs, getFirestore } = fireStore;
const db = getFirestore();

const querySnapshot = async () => {
	return await getDocs(collection(db, "movies")).catch((err) => {
		throw err;
	});
};

function* getMovies() {
	try {
		const data: fireStore.QuerySnapshot<fireStore.DocumentData> = yield call(
			querySnapshot
		);

		let tempArray: any = [];

		data.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data()}`);
			tempArray.push({ id: doc.id, ...doc.data() });
		});
		yield put({ type: GET_MOVIES_SUCCESS, payload: tempArray });
	} catch (err: any) {
		yield put({ type: GET_MOVIES_FAILED, payload: err.message });
	}
}

function* watchMovies() {
	yield takeLatest(GET_MOVIES_REQUEST, getMovies);
}

export default watchMovies;
