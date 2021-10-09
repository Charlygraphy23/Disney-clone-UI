import React from "react";

import Carousal from "components/Carusal/Carusal";
import Viewer from "components/Viewer/Viewer";
import Movies from "components/movies/Movies";

const Home = () => {
	return (
		<div className='home'>
			<Carousal />
			<Viewer />
			<Movies />
		</div>
	);
};

export default Home;
