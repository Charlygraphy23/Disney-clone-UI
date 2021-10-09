export interface MoviesState {
	loading: boolean;
	error: string;
	movies: Movies[] | [];
	movie: Movies | null;
}

interface Movies {
	id: string;
	name: string;
	description: string;
	previewUrl: string;
	duration: string;
}
