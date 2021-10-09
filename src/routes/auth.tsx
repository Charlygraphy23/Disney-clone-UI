import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

//interface
import { StoreType } from "interfaces/app.interface";

const Auth = (props: any) => {
	const auth = useSelector((state: StoreType) => state.AuthReducer);

	if (auth?.auth?.uid) return <Route {...props} />;

	return <Redirect to='/' />;
};

export default Auth;
