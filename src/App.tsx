import React, { useEffect } from "react";
import "styles/style.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useDispatch } from "react-redux";
import { checkAuth } from "store/actions/auth.action";

// routes
import IndexRoutes from "routes/index.routes";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkAuth());
		return () => {};
	}, [dispatch]);

	return (
		<>
			<IndexRoutes />
		</>
	);
}

export default App;
