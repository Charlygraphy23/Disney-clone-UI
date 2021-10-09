import { User } from "firebase/auth";

export interface AuthState {
	error: String;
	loading: Boolean;
	auth: User | null;
}
