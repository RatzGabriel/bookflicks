import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../utils/constants';
import { AiFillCloseCircle } from 'react-icons/ai';
import { SignIn, SignOut } from '../../utils/firebase/firebase';

const Menu = ({ setMenu, user }) => {
  return (
    <div className="  z-50 border-r-4  text-white  bg-black top-0 fixed w-3/6 left-0 overflow-hidden h-full overflow-x-hidden ">
      <div className=" items-center mx-auto w-4/5 flex mt-6     ">
        <AiFillCloseCircle className="pr-3 " size="3rem" onClick={() => setMenu(false)} />
      </div>
      <div className="mx-auto w-4/5 mt-5">
        <div className="">
          {links.map((link, index) => {
            return (
              <Link key={link.path + index} className="block mt-3 text-slate-300" to={link.path}>
                {link.name}
              </Link>
            );
          })}
          <div className="py-6 ">{user ? <SignOut /> : <SignIn />}</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
