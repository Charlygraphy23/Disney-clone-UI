import { all } from "redux-saga/effects";
import AuthSaga from "./auth.saga";
import CheckAuthSaga from "./checkAuth.saga";
import SignOutSaga from "./logout.saga";
import MoviesSaga from "./movies.saga";
import ViewMoviesSaga from "./viewMovie.saga";

function* IndexSaga() {
	yield all([
		AuthSaga(),
		CheckAuthSaga(),
		SignOutSaga(),
		MoviesSaga(),
		ViewMoviesSaga(),
	]);
}

export default IndexSaga;
