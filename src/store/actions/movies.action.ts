export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILED = "GET_MOVIES_FAILED";

export const VIEW_MOVIE_REQUEST = "VIEW_MOVIE_REQUEST";
export const VIEW_MOVIE_SUCCESS = "VIEW_MOVIE_SUCCESS";
export const VIEW_MOVIE_FAILED = "VIEW_MOVIE_FAILED";

export const requestMovies = () => {
	return {
		type: GET_MOVIES_REQUEST,
	};
};

export const requestViewMovie = (id: string) => {
	return {
		type: VIEW_MOVIE_REQUEST,
		payload: id,
	};
};
