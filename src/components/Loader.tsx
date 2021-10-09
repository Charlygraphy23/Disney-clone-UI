import React from "react";
import Loader from "react-loader-spinner";

const LoaderComponent = () => {
	return (
		<div
			className='d-flex justify-content-center align-center'
			style={{ minHeight: "100vh" }}>
			<Loader
				type='ThreeDots'
				color='white'
				timeout={3000} //3 secs
			/>
		</div>
	);
};

export default LoaderComponent;
