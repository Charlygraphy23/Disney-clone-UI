import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRequest } from "store/actions/auth.action";
import { Redirect } from "react-router-dom";

// interface
import { StoreType } from "interfaces/app.interface";

const Login = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state: StoreType) => state.AuthReducer);

	const handleLogin = useCallback(() => {
		dispatch(authRequest());
	}, [dispatch]);

	if (auth?.auth?.uid) return <Redirect to='/home' />;

	return (
		<div className='login'>
			<div className='background'></div>
			<button onClick={handleLogin}>
				<div className=''>{auth.loading}</div>
				<img
					src='https://img.icons8.com/color/48/000000/google-logo.png'
					alt='google-icon'
				/>
				<span>Login with Google</span>
			</button>
		</div>
	);
};

export default Login;
