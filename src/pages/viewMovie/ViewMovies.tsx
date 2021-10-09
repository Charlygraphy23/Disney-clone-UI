import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { requestViewMovie } from "store/actions/movies.action";
import { StoreType } from "interfaces/app.interface";
import ComponentLoader from "components/ComponentLoader";

const ViewMovies = () => {
	const { id }: Params = useParams();
	const dispatch = useDispatch();
	const { movie, loading } = useSelector(
		(state: StoreType) => state.MovieReducer
	);

	const styled = useMemo(() => {
		return {
			background: `url(${movie?.previewUrl}) no-repeat center`,
			backgroundSize: "cover",
			height: "calc(100vh - 72px)",
		};
	}, [movie]);

	useEffect(() => {
		dispatch(requestViewMovie(id));

		return () => {};
	}, [dispatch, id]);

	return (
		<>
			{!loading && (
				<div style={styled}>
					<div className='view__movies'>
						<h3 className='head'>{movie?.name}</h3>
						<p className='sub__head'>{movie?.duration}</p>
						<p className='description'>{movie?.description}</p>
					</div>
				</div>
			)}

			{loading && <ComponentLoader />}
		</>
	);
};

type Params = {
	id: string;
};

export default ViewMovies;
