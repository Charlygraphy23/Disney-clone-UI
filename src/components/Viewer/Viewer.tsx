import React from "react";

const Viewer = () => {
	return (
		<div className='viewer'>
			<div className='wrapper'>
				<div className='card'>
					<img src='images/viewers-disney.png' alt='disney' />
				</div>
			</div>

			<div className='wrapper'>
				<div className='card'>
					<img src='images/viewers-marvel.png' alt='disney' />
				</div>
			</div>

			<div className='wrapper'>
				<div className='card'>
					<img src='images/viewers-national.png' alt='disney' />
				</div>
			</div>

			<div className='wrapper'>
				<div className='card'>
					<img src='images/viewers-pixar.png' alt='disney' />
				</div>
			</div>

			<div className='wrapper'>
				<div className='card'>
					<img src='images/viewers-starwars.png' alt='disney' />
				</div>
			</div>
		</div>
	);
};

export default Viewer;
