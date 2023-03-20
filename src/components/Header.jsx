import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import { BOOKS_LOGO_SRC } from '../utils/constants';
import Menu from './Menu';
import { useSelector } from 'react-redux';

const Header = () => {
	const location = useLocation();
	const [menu, setMenu] = useState(false);
	const books = useSelector((store) => store.favorites.items);

	const toggleMenu = () => {
		setTimeout(() => {
			setMenu(!menu);
		}, 50);
	};

	return (
		<>
			<div className={'z-50 h-20 flex  md:w-full  top-0 '}>
				<div className="flex items-center justify-between w-full ">
					<GiHamburgerMenu
						onClick={() => toggleMenu()}
						className=" md:hidden  text-[2em] "
					/>
					<Link to="/">
						<img
							data-testid="logo"
							className="h-20 "
							src={BOOKS_LOGO_SRC}
							alt="logo"
						/>
					</Link>
				</div>
				<div
					data-testid="links"
					className="  hidden md:flex justify-between items-center w-3/12 "
				>
					<Link
						className={`${
							location.pathname === '/' ? 'text-red-400' : ''
						} px-4 text-3xl font-bold`}
						to="/"
					>
						Home
					</Link>
					<Link
						className={`${
							location.pathname === '/favorites' ? 'text-red-400' : ''
						}  text-3xl font-bold`}
						to="/favorites"
					>
						Favorites ({books.length})
					</Link>
				</div>
			</div>
			{menu && <Menu setMenu={setMenu} />}
		</>
	);
};

export default Header;
