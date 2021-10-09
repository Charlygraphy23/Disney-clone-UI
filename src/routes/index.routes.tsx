import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./auth";

//components
import Header from "components/header/Header";
import LoaderComponent from "components/Loader";
const Login = lazy(() => import("pages/login/Login"));
const Home = lazy(() => import("pages/home/Home"));
const ViewMovies = lazy(() => import("pages/viewMovie/ViewMovies"));

const IndexRoutes = () => {
	const AuthRoutes = () => (
		<>
			<Header />
			<Auth path='/home' component={Home} />
			<Auth path='/view/:id' component={ViewMovies} />
		</>
	);

	return (
		<Router>
			<Suspense fallback={<LoaderComponent />}>
				<Switch>
					<Route exact path='/' component={Login} />
					<AuthRoutes />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default IndexRoutes;
