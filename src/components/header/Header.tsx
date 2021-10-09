import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "store/actions/auth.action";

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogOut = useCallback(() => {
		history.push("/");
		dispatch(signOut());
	}, [dispatch, history]);

	return (
		<div className='header'>
			<div className='wrapper'>
				<div className='wrapper_hamburger drop__down'>
					<i className='bi bi-list hamburger dropdown__button'></i>
					<div className='dropdown__menu'>
						<Link to='/home'>TV</Link>
						<Link to='/home'>Movies</Link>
						<Link to='/home'>Sports</Link>
						<Link to='/' onClick={handleLogOut}>
							SignOut
						</Link>
					</div>
				</div>

				<Link to='/home'>
					<img
						src='https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg'
						alt='logo'
					/>
				</Link>

				<div className='desktop__menu'>
					<div className='drop__down'>
						<label htmlFor='' className='dropdown__button'>
							TV
						</label>
						<div className='dropdown__menu'>
							<Link to='/home'>Hotstar Special</Link>
							<Link to='/home'>Hotstar Special</Link>
							<Link to='/home'>Hotstar Special</Link>
						</div>
					</div>

					<div className='drop__down'>
						<label htmlFor='' className='dropdown__button'>
							Movies
						</label>
						<div className='dropdown__menu'>
							<Link to='/home'>Hotstar Special</Link>
							<Link to='/home'>Hotstar Special</Link>
							<Link to='/home'>Hotstar Special</Link>
						</div>
					</div>

					<div className='drop__down'>
						<label htmlFor='' className='dropdown__button'>
							Sports
						</label>
						<div className='dropdown__menu'>
							<Link to='/home'>Hotstar Special</Link>
							<Link to='/home'>Hotstar Special</Link>
							<Link to='/home'>Hotstar Special</Link>
						</div>
					</div>
				</div>
			</div>

			<div className='search__field'>
				<input type='text' placeholder='Search' />
				<i className='bi bi-search'></i>

				<p onClick={handleLogOut}>Sign Out</p>
			</div>
		</div>
	);
};

export default Header;
