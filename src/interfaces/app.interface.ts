import { AuthState } from "./auth.interface";
import { MoviesState } from "./movies.interface";

export interface ActionPayloadType {
	type: String;
	payload: any;
}

export interface StoreType {
	AuthReducer: AuthState;
	MovieReducer: MoviesState;
}
