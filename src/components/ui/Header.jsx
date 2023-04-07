import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';
import { BOOKS_LOGO_SRC } from '../../utils/constants';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import Search from './Search';

import { useAuthState } from 'react-firebase-hooks/auth';
import { SignIn, SignOut, auth } from '../../utils/firebase/firebase';

const Header = () => {
  const [user] = useAuthState(auth);
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
      <div className={'z-50 h-20 flex  md:w-full  top-0 justify-between mx-auto w-4/5  '}>
        <div className="flex flex-col items-center justify-between  w-full ">
          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-around w-full h-20 ">
              <GiHamburgerMenu
                onClick={() => toggleMenu()}
                className=" md:hidden inline-block  text-[2em] "
              />
              <Link to="/">
                <img
                  data-testid="logo"
                  className="h-20 hidden md:inline-block "
                  src={BOOKS_LOGO_SRC}
                  alt="logo"
                />
              </Link>
              <div className="inline-block md:hidden">
                <Search />
              </div>
              <div className="hidden md:inline-block  ">
                <Link className={`${location.pathname === '/' ? 'text-red-400' : ''} px-4`} to="/">
                  Home
                </Link>
                <Link
                  className={`${location.pathname === '/favorites' ? 'text-red-400' : ''} px-4`}
                  to="/favorites"
                >
                  Favorites
                  <span className="text-xs mx-1 " data-testid="booklength">
                    {books?.length != undefined && books.length}
                  </span>
                </Link>

                <Link
                  className={`${location.pathname === '/comedy' ? 'text-red-400' : ''} px-4`}
                  to="/comedy"
                >
                  comedy
                </Link>
                <Link
                  className={`${location.pathname === '/crime' ? 'text-red-400' : ''} px-4`}
                  to="/crime"
                >
                  crime
                </Link>
                <Link
                  className={`${location.pathname === '/fantasy' ? 'text-red-400' : ''} px-4`}
                  to="/fantasy"
                >
                  fantasy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-testid="links"
          className="  hidden md:flex justify-between items-center w-6/12  text-3xl "
        >
          <div className="w-full hidden md:inline-block">
            <Search />
          </div>
          {user ? <SignOut /> : <SignIn />}
        </div>
      </div>
      {menu && <Menu setMenu={setMenu} user={user} />}
    </>
  );
};

export default Header;
