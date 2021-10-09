import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestMovies } from "store/actions/movies.action";
import { StoreType } from "interfaces/app.interface";
import ComponentLoader from "components/ComponentLoader";

const Movies = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { loading, movies } = useSelector(
		(state: StoreType) => state.MovieReducer
	);

	useEffect(() => {
		dispatch(requestMovies());

		return () => {};
	}, [dispatch]);

	return (
		<>
			{!loading && (
				<>
					<div className='movies'>
						{movies.map((value, i) => (
							<div
								key={i}
								className='movie_card'
								onClick={() => history.push(`/view/${value.id}`)}>
								<img src={value.previewUrl} alt='imageUrl' />
							</div>
						))}
					</div>

					<div className='movies'>
						{movies.map((value, i) => (
							<div key={i} className='movie_card'>
								<img src={value.previewUrl} alt='imageUrl' />
							</div>
						))}
					</div>
				</>
			)}

			{loading && <ComponentLoader />}
		</>
	);
};

export default Movies;
