import React from "react";
import Loader from "react-loader-spinner";

const ComponentLoader = () => {
	return (
		<div className='d-flex justify-content-center align-center py-4'>
			<Loader
				type='ThreeDots'
				color='white'
				timeout={3000} //3 secs
			/>
		</div>
	);
};

export default ComponentLoader;
